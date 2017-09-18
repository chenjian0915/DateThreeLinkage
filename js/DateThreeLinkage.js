function DateThreeLinkage(options){
    if(!options.element){return;}
    this.createElement(options.element);
}

DateThreeLinkage.prototype.createElement = function(element){
    this.oYear = $(element.year);
    this.oMonth = $(element.month);
    this.oDay = $(element.day);
    this.InitYear();
    this.InitMonth();
    this.InitDay(31,this);
    this.oYear.on('change',{this:this,InitDay : this.InitDay,oMonth:this.oMonth,oYear:this.oYear},this.DayChange);
    this.oMonth.on('change',{this:this,InitDay : this.InitDay,oMonth:this.oMonth,oYear:this.oYear},this.DayChange);
};
DateThreeLinkage.prototype.InitYear = function(){
    var nowYear = new Date().getFullYear();
    var sYear = '<option>请选择</option>';
    for(var i=0;i<50;i++){
        sYear += '<option>'+(nowYear-i)+'</option>'
    }
    this.oYear.html(sYear);
};
DateThreeLinkage.prototype.InitMonth = function(){
    var sMonth = '<option>请选择</option>';
    for(var i=1;i<=12;i++){
        sMonth += '<option>'+i+'</option>'
    }
    this.oMonth.html(sMonth);
};
DateThreeLinkage.prototype.InitDay = function(days,_this){
    var sDay = '<option>请选择</option>';
    for(var i=1;i<=days;i++){
        sDay += '<option>'+i+'</option>'
    }

    _this.oDay.html(sDay);
};
DateThreeLinkage.prototype.DayChange = function(event){
    console.log(event.data.this)
    if(parseInt(event.data.oYear.val())%4===0&&event.data.oMonth.val()==2){
        event.data.InitDay(29,event.data.this);
    }else if(parseInt(event.data.oYear.val())%4!==0&&event.data.oMonth.val()==2){
        event.data.InitDay(28,event.data.this);
    }else if(event.data.oMonth.val()==4||event.data.oMonth.val()==6||event.data.oMonth.val()==9||event.data.oMonth.val()==11){
        event.data.InitDay(30,event.data.this);
    }else{
        event.data.InitDay(31,event.data.this);
    }
};


