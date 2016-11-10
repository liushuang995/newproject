/**
 * Created by liushuang on 2016/11/9.
 */
define(['zepto'],function($){
    $('button[type=button]').on('click',function(){
        $.ajax({
            url:"http://localhost:3000/users/save2",
            data:{
                username:$('input[type="text"]').val(),
                password:$('input[type="password"]').val()
            },
            dataType:'json',
            type:"post",
            success:function(res){
                alert(res.responseMsg)
            }
        })
    })
})