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
	
	it('should have method attribute', function(done){
		var r = new Request();
		
		r.should.have.property('method');
		done();
	});
	
	it('should have static method constants', function(done){
		Request.should.have.property('GET');
		Request.should.have.property('POST');
		done();
	});
	
	it('should have default method of GET', function(done){
		var r = new Request();
		
		should.strictEqual( r.method(), Request.GET );
		done();
	});
	
	it('should change method value from default', function(done){
		var r = new Request();
		r.method( Request.POST );
		
		should.strictEqual( r.method(), Request.POST );
		done();
	});
	
	it('should have a run method', function(done){
		var r = new Request();
		
		r.should.have.property('run');
		should.strictEqual( typeof r.run, 'function' );
		done();
	});
	
	it('should receive error if runned without url', function(done){
		var r = new Request();
		
		r.run(function(err){
			should.exist(err);
			done();
		})
	});
	
	it('should receive error if any host, dns, page error', function(done){
		var r = new Request();
		
		r.url('http://cucumuculucu');
		r.run(function(err){
			should.exist(err);
			done();
		});
	});
	
	it('should received page contents on success', function(done){
		var r = new Request();
		
		r.url('http://google.com');
		r.run(function(err, content){
			should.not.exist(err);
			should.exist(content);
			done();
		});	
	});
	
})