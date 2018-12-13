/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
    //config.bodyId='js_txt';		//实际输入区域
    config.language = 'zh-cn';
    config.height = '200';
    //config.toolbarCanCollapse = true;
    config.toolbar = [/*{
            name: 'document',
            items: ['Source']
        },*/
        {
            name: 'clipboard',
            items: ['Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo']
        },
        {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat']
        },
        {
            name: 'colors',
            items: ['TextColor', 'BGColor']
        },
        {
            name: 'paragraph',
            items: ['Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'NumberedList', 'BulletedList']
        },
        {
            name: 'links',
            items: ['Link', 'Unlink', 'Anchor']
        },
        {
            name: 'insert',
            items: ['Table', 'Image']
        },
        {
            name: 'styles',
            items: ['Font', 'FontSize', 'Format']
        },
        {
            name: 'tools',
            items: ['Maximize']
        }
    ];
    config.toolbar_booxMark = [{
            name: 'document',
            items: ['Source']
        },
        {
            name: 'clipboard',
            items: ['Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo']
        },
        {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat']
        },
        {
            name: 'colors',
            items: ['TextColor', 'BGColor']
        },
        {
            name: 'paragraph',
            items: ['Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'NumberedList', 'BulletedList']
        },
        {
            name: 'links',
            items: ['Link', 'Unlink']
        },
        {
            name: 'insert',
            items: ['Table', 'Image']
        },
        {
            name: 'styles',
            items: ['Font', 'FontSize']
        },
        {
            name: 'tools',
            items: ['Maximize']
        }
    ];
    config.toolbar_Basic = [{
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike']
        },
        {
            name: 'colors',
            items: ['TextColor', 'BGColor']
        },
        {
            name: 'paragraph',
            items: ['Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        {
            name: 'styles',
            items: ['Font', 'FontSize', 'Format']
        },
        {
            name: 'links',
            items: ['Link', 'Unlink', 'Anchor']
        }
    ];
    config.toolbar_All = [{
            name: 'document',
            items: ['Source']
        },
        {
            name: 'clipboard',
            items: ['Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo']
        },
        {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat']
        },
        {
            name: 'colors',
            items: ['TextColor', 'BGColor']
        },
        {
            name: 'paragraph',
            items: ['Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'NumberedList', 'BulletedList']
        },
        {
            name: 'links',
            items: ['Link', 'Unlink', 'Anchor']
        },
        {
            name: 'insert',
            items: ['Table', 'Image']
        },
        {
            name: 'styles',
            items: ['Font', 'FontSize', 'Format']
        },
        {
            name: 'tools',
            items: ['Maximize']
        }
    ];
    config.font_names = '宋体/SimSun;新宋体/NSimSun;仿宋_GB2312/FangSong_GB2312;楷体_GB2312/KaiTi_GB2312;黑体/SimHei;微软雅黑/Microsoft YaHei;' + config.font_names;
    config.fontSize_sizes = '12px;14px;16px;18px;20px;22px;24px;26px;28px;36px;48px;60px;';
//    config.removePlugins = 'resize';
    //forcePasteAsPlainText=true;			//强制粘贴时清除格式,截图粘贴时禁用
    /*图片配置*/
    //config.image_previewText=' ';		//预览区
    //config.imageUploadUrl = './'; //图片(拖拽)
    //config.filebrowserImageUploadUrl = './'; //图片(上传)，打开图片上传功能
    //config.removeDialogTabs='image:advanced;image:Link;';		//去除图像窗口内容,使用了image2增强组件，所以禁用
    //而外添加的组件
    config.extraPlugins = 'image,image2,uploadimage,lineutils,widgetselection,notification,notificationaggregator,filetools,widget,uploadwidget';
};