(function(w,undefined){
  var
  freedom=function(item){
    return new freedom.fd.init(item);
  },
  freedom.fd=freedom.prototype={
        init:function(item) {
          alert()
        }
    },
  freedom.fd.init.prototype =freedom.fd;
  w.f=freedom;
})(window)
