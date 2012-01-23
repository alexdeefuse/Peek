/**
 *
 *	@author			: Alex Ghiu
 *	@description	: simple http request based on url
 *
 */

var EventEmitter	= require('events').EventEmitter;
var _				= require('underscore');
var util			= require('util');
var http			= require('http');
var url				= require('url');

/**
 *	constructor & inheritance
 */

function Request(url){
	EventEmitter.call(this);
	
	if( typeof url !== 'undefined' ){
		this.url(url);
	}
};

util.inherits( Request, EventEmitter );

/**
 *	url property
 */

Request.prototype._url;

Request.prototype.url = function(val){
	if( val === undefined ){
		return this._url;
	}
	
	this._url = url.parse( val, true, true );
}

/**
 *	headers property
 */

Request.prototype._headers = {
	'connection'		: 'keep-alive',
	'cache-control'		: 'no-cache',
	'pragma'			: 'no-cache',
	'user-agent'		: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7',
	'accept'			: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'accept-encoding'	: 'gzip,deflate,sdch',
	'accept-language'	: 'en-US,en;q=0.8',
	'accept-charset'	: 'ISO-8859-1,utf-8;q=0.7,*;q=0.3'
};

Request.prototype.headers = function(val){
	if( val === undefined ){
		return this._headers;
	}
	
	this._headers = val;
}

/**
 *	method property
 */

Request.GET		= 'GET';
Request.POST	= 'POST';

Request.prototype._method = Request.GET;

Request.prototype.method = function(val){
	if( val === undefined ){
		return this._method;
	}
	
	this._method = val;
}

/**
 *	run
 */

Request.prototype.run = function(callback){
	var url = this.url();
	
	if( !url ){
		callback( new Error('no url') );
	}else{
		
		var options = {
			'host'		: url.host,
			'port'		: 80,
			'path'		: url.path,
			'method'	: this.method(),
			
			'headers'	: this.headers(),
		};
		
		// cleanup
		url = null; 
		
		var req = http.request( options, function(res){
			res.setEncoding('utf8');
			res.on('data', function(chunk){
				callback(null, chunk);
				
				// cleanup
				chunk = null;
				
			});
			res.on('error', function(err){
				callback(err);
				
				// cleanup
				err = null;
			})
			
			// cleanup
			res = null; 
		} );
		
		req.on('error', function(err){
			callback(err);
		
		});
		
		req.end();
		
		// cleanup
		req = null;
	}
}


module.exports = Request;