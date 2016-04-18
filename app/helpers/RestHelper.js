var $ = require('jquery');

module.exports = {
    get : function(url){
        return new Promise(function(success, error){
            $.ajax({
                url: url,
                dateType:"json",
                success: success,
                error:error
            })
        })
    },    
    post : function(url, data){
        return new Promise(function(success, error){
            $.ajax({
                url: url,
                type:"POST",
                dateType:"json",
                data:data,
                success: success,
                error:error
            })
        })
    },
    patch : function(url, data){
        return new Promise(function(success, error){
            $.ajax({
                url: url,
                type:"PATCH",
                dateType:"json",
                data:data,
                success: success,
                error:error
            })
        })
    },
    del : function(url){
        return new Promise(function(success, error){
            $.ajax({
                url: url,
                type:"DELETE",
                success: success,
                error:error
            })
        })
    }
}