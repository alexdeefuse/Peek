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
 *	run
 */

Request.prototype.run = function(callback){
	if( !this.url() ){
		callback( new Error('No url given') );
	}else{
		
		url.parse( this.url() )
		
		http.request(  )
		
	}
}


module.exports = Request;