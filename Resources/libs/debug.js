function print_r(a,b,c,d){d=d||0;b=b||10;c=c||" ";if(d>b){return"[WARNING: Too much recursion]\n"}var e,f="",g=typeof a,h="";if(a===null){f+="(null)\n"}else if(g=="object"){d++;for(e=0;e<d;e++){h+=c}if(a&&a.length){g="array"}f+="("+g+") :\n";for(e in a){try{f+=h+"["+e+"] : "+print_r(a[e],b,c,d+1)}catch(i){return"[ERROR: "+i+"]\n"}}}else{if(g=="string"){if(a==""){a="(empty)"}}f+="("+g+") "+a+"\n"}return f}var_dump=print_r

function consoleEcho(str) {
	Titanium.API.info("Logging Echo: >>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<");
	Titanium.API.info(print_r(str));
	Titanium.API.info("Logging Echo: >>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<");
}