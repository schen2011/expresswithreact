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
    }
}