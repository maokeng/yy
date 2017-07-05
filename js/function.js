/**
 * Created by 董浩 on 2017-06-05.
 * _swalInfo('测试标题','测试内容','关闭','info','#DD6B55');
 * _swalConfig('提示标题','提示内容','info','YES','NO','http://www.baidu.com','成功标题','成功内容','成功按钮','info','#DD6B55');
 */
$(function () {

})

function forgotPassword(int) {
    if(int === 0){
        _swalInfo('Error','找回密码功能正在完善','关闭','error');
    }
}
function refresh(o) {
    location.reload();
}
/**
 * ajaxGetLink
 * @param obj
 */
function ajaxGetLink(obj)
{
    ajaxAction($(obj).attr("data-json"),$(obj).attr("_href"),'get','NULL','NULL');
}
/**
 * ajaxGetLink
 * @param obj
 */
function ajaxPostLink(obj,id,other)
{
    var link = $(obj).attr("_href");
    var json = $(obj).attr("data-json");

    if((id==='0'||!id)&&(!other||other ==='0')){
        ajaxAction(json,link,'post','NULL','NULL');   
    }else{
        if(!other||other ==='0'){
            json += '&'+$("#"+id).find("input[type='checkbox'][name='ids[]']:checked").serialize();
            ajaxAction(json,link,'post','NULL','NULL');   
        }else{
            switch(other)
            {
            case 'del':
                json += '&'+$("#"+id).find("input[type='checkbox'][name='ids[]']:checked").serialize();
                _confirm_ajaxaction('确定要执行此操作？注意此操作不可恢复',json,link,'post','NULL','NULL');
                break;
            case 'listorder':
                json += '&'+$("#"+id).find("input[type='text'][name='listorder[]']").serialize();
                json += '&'+$("#"+id).find("input[type='hidden'][name='listorderid[]']").serialize();
            	ajaxAction(json,link,'post','NULL','NULL');   
            	break;
            default:
                alert("未定义");
                break;
            }

        }
    }
}
function _confirm_ajaxaction(info,FormJson,FromAction,FromMethod,File,FormId)
{
    var index = parent.layer.confirm(info?info:'未补充Info信息', {btn: ['确定','取消'],shade:0.5,shift:parseInt(5*Math.random()+1)},function(){ 
        parent.layer.close(index); 
            ajaxAction(FormJson,FromAction,FromMethod,File,FormId,index);
    });
}

function layerIform(obj)
{
    parent.layer.open({
        type: 2,
        title:$(obj).attr("data-title"),
        area: ['80%', '80%'],
        fixed: true, //不固定
        maxmin: false,
        content:$(obj).attr("_href")
    });
}


/**
 *
 * icon     1 对号
 *          2 错号
 *          3 问号
 *          4 加锁
 *          5 哭脸
 *          6 笑脸
 *          7 感叹号
 */  

function __msg(info,icon,time,url)
{
    if(!info){ var info = '这是测试信息'; }
    if(!time){ var time = 1000; }
    if(!icon){
        if(!url){
            parent.layer.msg(info,{time:time,shade:0.5,shift:parseInt(5*Math.random()+1)});
        }else{
            parent.layer.msg(info,{time:time,shade:0.5,shift:parseInt(5*Math.random()+1)},function(){ location.href=url; });
        }
    }else{
        if(!url){
            parent.layer.msg(info,{icon:icon?icon:0,time:time,shade:0.5,shift:parseInt(5*Math.random()+1)});
        }else{
            parent.layer.msg(info,{icon:icon?icon:0,time:time,shade:0.5,shift:parseInt(5*Math.random()+1)},function(){ location.href=url; });
        }
    }
}
/**
 * 提示信息，可以带链接
 * @param json
 * @private
 */
function _msg(json)
{
    //定义全局需要使用的layer需要的变量
    if(json.icon==='NULL'){
        if(!json.url){
            parent.layer.msg(json.info?json.info:'未定义提示信息', {
                time: json.time?json.time:1500,
                shift:parseInt(5*Math.random()+1),
                shade:0.5
            });
        }else{
            parent.layer.msg(json.info?json.info:'未定义提示信息', {
                time: json.time?json.time:1500,
                shift:parseInt(5*Math.random()+1),
                shade:0.5
            },function(){
                location.href=json.url;
            });
        }
    }else{
        if(!json.url){
            parent.layer.msg(json.info?json.info:'未定义提示信息', {
                icon: json.icon?json.icon:0,
                time: json.time?json.time:1500,
                shift:parseInt(5*Math.random()+1),
                shade:0.5
            });
        }else{
            parent.layer.msg(json.info?json.info:'未定义提示信息', {
                icon: json.icon?json.icon:0,
                time: json.time?json.time:1500,
                shift:parseInt(5*Math.random()+1),
                shade:0.5
            },function(){
                location.href=json.url;
            });
        }
    }
}
/**
 * From提交函数
 * @param form     form元素
 */
function checkForm(form)
{
    // 获取form对象
    var FromObj 	= $(form);
    // 获取form提交方式
    var FromMethod  = FromObj.attr('method');
    // 获取form提交地址
    var FromAction  = FromObj.attr('action');
    // 获取form的ID
    var FormId      = FromObj.attr('id');
    // 定义form的默认返回数据
    var FormJson    = false;
    // 判断form内是否有file的信息
    if($('#'+FormId).find(':file').length > 0){
        // 有的话获取带验证后的file的对象数据
        FormJson = formToJson(FormId,'FormData');
    }else{
        // 没有的话获取验证后的json数据
        FormJson = formToJson(FormId,'NULL');
    }
    // 判断返回的json数据是否是错误的，如果不是，进行ajax提交
    if(FormJson !== false){
        // 检测是否有file，有的话调取可以上传file的ajax
        if($('#'+FormId).find(':file').length > 0){
            ajaxAction(FormJson,FromAction,FromMethod,'file',FormId);
            // 没有file的话，直接进行ajax请求
        }else{
            ajaxAction(FormJson,FromAction,FromMethod,'NULL',FormId);
        }
    }
    return false;
}
function formAddClass(id,addClass)
{
    switch($("#"+id).attr('type')){
        case 'text':
        	$("#"+id).parent().parent().addClass(addClass);
        	return false;
        	break;
        default:
            $("#"+id).parent().parent().addClass(addClass);
        	return false;
            break;
    }
}
/**
 * From表单下的数据转换为Json数据
 * @param id
 * @param fun
 * @returns {boolean}
 */
function formToJson(id,fun)
{
    var FormId = '#'+id;
    var validateFind = $(FormId).find('input[data-validate],textarea[data-validate],select[data-validate],radio[data-validate],checkbox[data-validate],input[data-value-neq],textarea[data-value-neq],select[data-value-neq],radio[data-value-neq],checkbox[data-value-neq]');
    for (var i = 0; i < validateFind.length; i++) {
        var element         = validateFind.eq(i);
        var value           = element.val();
        var tipId           = element.attr('id');
        if(typeof(element.attr("data-validate")) !== "undefined"){
        	var validate            = element.attr('data-validate').split(':');
	        if(CheckValueDate(validate[0],value) === false){
	            __msg(validate[1],'5');
	            $('#'+tipId).focus();
	            formAddClass(tipId,'has-error');
	            var isFalse = 'yes';
	            break;
	        }
        }
        if(typeof(element.attr("data-value-neq")) !== "undefined"){
        	var valueneq            = element.attr('data-value-neq').split(':');
	        if(valueneq[0] === value){
	            __msg(valueneq[1],'5');
	            $('#'+tipId).focus();
	            formAddClass(tipId,'has-error');
	            var isFalse = 'yes';
	            break;
	        }
        }
    }
    if(isFalse === 'yes'){
        return false;
    }else{
        if(fun === 'FormData'){
            // var data = new FormData(jQ( "#"+id)[0]); FormData
            alert('FormData');
        }else if(fun === 'NULL'){
            var data = $('#'+id).serialize(); // 获取form数据
        }
        return data;
    }
}

/**
 * ajax提交方法
 * @param FormJson
 * @param FromAction
 * @param FromMethod
 * @param File
 * @param FormId
 * @returns {boolean}
 */
function ajaxAction(FormJson,FromAction,FromMethod,File,FormId,othertip)
{

    if(!othertip){ var othertip = 1; }
    // 如果是POST提交方式
    if(FromMethod === 'post')
    {
        // 如果没有file
        if(File === 'NULL')
        {
            var index = 0;
            $.ajax({
                type:FromMethod,
                url:FromAction,
                data: FormJson,
                dataType: 'json',
                beforeSend: function () {
                    index = parent.layer.load(1, {shade: [0.1,'#fff']});
                    $('#'+FormId).find(':submit').attr({ disabled: 'disabled'});
                },
                success:function(data){
                        if(data.fun ==='_msg'){
                            _msg(data);
                        }else if(data.fun ==='_close'){
                            if(data.colse ==='y'){
                                __msg(data.info,data.icon,data.time);
                                parent.$("#content-main").find("iframe").siblings("[data-id='"+parent.$(".page-tabs-content").find("a").siblings(".active").attr("data-id")+"']").attr('src',parent.$("#content-main").find("iframe").siblings("[data-id='"+parent.$(".page-tabs-content").find("a").siblings(".active").attr("data-id")+"']").attr('data-id'));
                                setTimeout(function () { 
                                    parent.layer.closeAll(); 
                                },data.time);
                            }else{
                                refresh();
                            }
                        }
                },
                complete: function () {
                    parent.layer.close(index);
                    $('#'+FormId).find(':submit').removeAttr('disabled')
                },
                error:function(){
                    parent. layer.msg('请求错误');
                }
            });
        }else{
            alert("NULL");
        }
    }else if(FromMethod === 'get'){
        var index = 0;
        $.ajax({
            type:FromMethod,
            url:FromAction,
            data: FormJson,
            dataType: 'json',
            beforeSend: function () {
                index = parent.layer.load(1, {shade: [0.1,'#fff']});
                $('#'+FormId).find(':submit').attr({ disabled: 'disabled' });
            },
            success:function(data){
                    if(data.fun ==='_msg'){
                        _msg(data);
                    }
            },
            complete: function () {
                parent.layer.close(index);
                $('#'+FormId).find(':submit').removeAttr('disabled')
            },
            error:function(){
                parent.layer.msg('请求错误');
            }
        });
    }




    return false;
}
/**
 * 正则验证传入的值是否匹配
 * @param type
 * @param value
 * @returns {*}
 */
function CheckValueDate(type,value)
{
    var thisValue=value.replace(/(^\s*)|(\s*$)/g, '');
    switch(type){
        case '0':return thisValue;break;
        case 'required':return /[^(^\s*)|(\s*$)]/.test(thisValue);break;
        case 'qq':return /^\d{5,10}$/.test(thisValue);break;
        case 'email':return /^([\w\-\.]+)@[\w\-\.]+(\.\w+)+$/.test(thisValue);break;
        case 'tel':return /^1[34578]\d{9}$/.test(thisValue);break;
        case 'passowrd':return (/^\d\w{5,100}|\w\d{5,100}|\d{5,100}|\w{5,100}$/.test(thisValue));break;
        case 'cardId':return /^[1-9]([0-9]{16}|[0-9]{13})[xX0-9]$/.test(thisValue);break;
        case 'number':return /^[0-9]*$/.test(thisValue);break;
        case 'english':return /^[A-Za-z]+$/.test(thisValue);break;
        case 'englishCapital':return /^[A-Z]+$/.test(thisValue);break;
        case 'englishLetter':return /^[a-z]+$/.test(thisValue);break;
        default:
            alert('default');
            return false;
            break;
    }
}
/**
 * swalInfo 提示框
 * @param title                     提示标题
 * @param text                      提示内容
 * @param confirmButtonText         按钮内容
 * @param type                      提示状态
 * @param confirmButtonColor        按钮颜色
 * @private
 */
function _swalInfo(title,text,confirmButtonText,type,confirmButtonColor) {
    swal({
        title: title?title:'',
        text: text?text:'请填写提示信息',
        type:type?type:'',
        confirmButtonColor: confirmButtonColor?confirmButtonColor:'#DD6B55',
        confirmButtonText: confirmButtonText?confirmButtonText:'确定',
    });
}
/**
 * _swalConfig 确定框
 * @param title                     提示标题
 * @param text                      提示内容
 * @param type                      提示状态
 * @param confirmButtonText         成功按钮
 * @param cancelButtonText          失败按钮
 * @param url                       跳转地址
 * @param sctitle                   确定提示信息
 * @param sctext                    确定提示内容
 * @param scbut                     确定提示按钮
 * @param sctype                    确定提示状态
 * @param sccolor                   确定提示颜色
 * @private
 */
function _swalConfig(title,text,type,confirmButtonText,cancelButtonText,url,sctitle,sctext,scbut,sctype,sccolor){
        swal({
                title: title?title:'',
                text: text?text:"请填写提示信息",
                type: type?type:"",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: confirmButtonText?confirmButtonText:"Yes",
                cancelButtonText: cancelButtonText?cancelButtonText:"No",
                closeOnConfirm: false,
            },function() {
                if(url){
                    location.href=url;
                }else{
                    _swalInfo(sctitle,sctext,scbut,sctype,sccolor);
                }
            })
}