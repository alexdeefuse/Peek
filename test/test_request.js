var should			= require('should');
var util			= require('util');
var _				= require('underscore');

var Request			= require('../request');
var EventEmitter	= require('events').EventEmitter;

describe('Request', function(){
	
	it('should be able to emit events', function(done){
		var r = new Request();
		r.should.be.an.instanceof(EventEmitter);
		done();
	});
	
	it('should accept an url attribute', function(done){
		var r = new Request();
		
		r.should.have.property('url');
		done();
	});
	
	it('should allow url to be passed to the contructor', function(done){
		var url = 'http://google.co';
		
		var r = new Request(url);
		should.exist( r.url() );
	
		done();
	});
	
	it('should allow headers to be set as attribute', function(done){
		var r = new Request();
		
		r.should.have.property('headers');
		done();
	});
	
	it('should have default headers', function(done){
		var r = new Request();
		
		var headers_number = _.size( r.headers() );
		headers_number.should.be.above(0);
		done();
	});
	
	it('should have a run method', function(done){
		var r = new Request();
		
		r.should.have.property('run');
		should.strictEqual( typeof r.run, 'function' );
		done();
	});
	
	
	
})