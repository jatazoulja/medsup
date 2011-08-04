var ajax = {
	xhr : Titanium.Network.createHTTPClient(),
	post : function(url,serial,fn,fnReady,fnError,fnOnsendstream,fnOndatastream) {
		this.xhr.onprogress = (fnOnsendstream) ? fnOnsendstream : function() {
			return false
		};
		this.xhr.ondatastream  = (fnOndatastream) ? fnOndatastream : function() {
			return false
		};
		this.xhr.onreadystatechange = (fnReady) ? fnReady : function() {
			return false
		};
		this.xhr.open('POST', arSettings.url+url);
		this.xhr.onload = fn;

		this.xhr.onerror = (fnError) ? fnError : function() {
			return false
		};
		this.xhr.send(serial);
	}
}

