<template>
<div>
    <!-- Your Page Content Here -->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-date-picker
                        v-model="beginTime"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        format="yyyy-MM-dd 0:0:0"
                        :picker-options="pickerOptions2">
                    </el-date-picker>
                    -
                    <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        format="yyyy-MM-dd 0:0:0"
                        :picker-options="pickerOptions2">
                    </el-date-picker>
                    |
                    <el-input v-model="userId" placeholder="tel/userId/SeqId"
                              style="width: 20%;"></el-input>
                    <el-button type="primary" v-on:click="getUserList">查询</el-button>
                    <el-button type="primary" @click="dialogFormVisible = true">增加</el-button>
                    
                    <el-dialog title="增加套餐" :visible.sync="dialogFormVisible">
                                    <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="套餐名称">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="套餐金额">
                                    <el-select v-model="form.region" placeholder="请选择套餐金额">
                                    <el-option label="38" value="38"></el-option>
                                    <el-option label="58" value="58"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="套餐时间">
                                    <el-col :span="11">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="及时应用">
                                    <el-switch v-model="form.delivery"></el-switch>
                                </el-form-item>
                                <el-form-item label="套餐类型">
                                    <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="可以叠加" name="type"></el-checkbox>
                                    <el-checkbox label="下月清零" name="type"></el-checkbox>
                                    <el-checkbox label="固定资费" name="type"></el-checkbox>
                                    <el-checkbox label="额外收费" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="特定套餐">
                                    <el-radio-group v-model="form.resource">
                                    <el-radio label="是特殊群体"></el-radio>
                                    <el-radio label="不是特殊群体"></el-radio>
                                    <el-radio label="都可以选择"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="套餐信息">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                </div>
                        </el-dialog>

                </el-form-item>
            </el-form>
        </el-col>
    <div>
    <el-table
    :data="tableData.filter(data => !search || data.money.toLowerCase().includes(search.toLowerCase()))"
    border
    style="width: 100%">
    <el-table-column
      label="套餐名字"
      prop="name">
    </el-table-column>
    <el-table-column
      label="金额"
      prop="money">
    </el-table-column>
    <el-table-column
      label="套餐信息"
      prop="info">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
    import Vue from 'vue';
    import Constants from '@/utils/constants';
    import DataTables from "@/utils/datatables";
    import Basic from "@/utils/basic";
    

    export default {
        name: "User",

        data() {
            return {
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                tableData: [{
                name: '神州行',
                money: '38元/月',
                info: '一个月38元，包含免费通话60分钟，超过60分钟，收费0.1/分钟'
                }, {
                name: '校园行',
                money: '18元/月',
                info: '一个月18元，包含免费通话60分钟，超过60分钟，收费0.1/分钟'
                }, {
                name: '大魔王套餐',
                money: '58元/月',
                info: '一个月58元，包含免费通话120分钟，超过60分钟，收费0.1/分钟'
                }, {
                name: '超级套餐',
                money: '108元/月',
                info: '一个月108元，包含免费通话180分钟，超过60分钟，收费0.1/分钟'
                }],
                search: ''
            }
        },

        methods: {
            open() {
                this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                }
                });
            },
            onSubmit() {
            console.log('submit!');
        }
        },

        mounted: function () {
            this.$nextTick(function () {
                const editor = new $.fn.dataTable.Editor({
                    ajax: function (method, url, object, successCallback, errorCallback) {
                        let action = object.action;
                        let data = object.data;
                        let output = { data: []};
                        let param = {};
                        method = DataTables.Editor.ajaxType(action);
                        url = "/users";

                        $.each(data, function (key, value) {
                            if (action === "create" || action === "edit") {
                                param = value;
                            } else if (action === "remove") {
                                url += "/" + key;
                                param = null
                            }
                        });

                        output.data.push(param);

                        Vue.axios.request({
                            method: method,
                            url: url,
                            data: param
                        }).then(response => {
                            successCallback(output);
                        }).catch(error => {
                            errorCallback();
                        });
                    },
                    table: '#user',
                    idSrc: 'username',
                    fields: [
                        {
                            label: "用户名",
                            name: "username",
                            validate: ["required"]
                        },
                        {
                            label: "密码",
                            name: "password",
                            type: "password"
                        },
                        {
                            label: "昵称",
                            name: "displayName",
                        },
                        {
                            label: "电子邮箱",
                            name: "email",
                        },
                        {
                            label: "手机号",
                            name: "phoneNumber"
                        },
                        {
                            label: "生日",
                            name: "birthday",
                            type: "datetime",
                            opts: {
                                minDate: new Date("1900-01-01"),
                                maxDate: new Date(),
                                showWeekNumber: true
                            }
                        },
                        {
                            label: "状态",
                            name: "enabled",
                            type: "radio",
                            def: true,
                            options: [
                                { label: "启用", value: true },
                                { label: "禁用", value: false }
                            ]
                        },
                        {
                            label: "账号已过期",
                            name: "accountNonExpired",
                            type: "radio",
                            def: true,
                            options: [
                                { label: "未过期", value: true },
                                { label: "已过期", value: false }
                            ]
                        },
                        {
                            label: "账号已锁定",
                            name: "accountNonLocked",
                            type: "radio",
                            def: true,
                            options: [
                                { label: "未锁定", value: true },
                                { label: "已锁定", value: false }
                            ]
                        },
                        {
                            label: "密码已过期",
                            name: "credentialsNonExpired",
                            type: "radio",
                            def: true,
                            options: [
                                { label: "未过期", value: true },
                                { label: "已过期", value: false }
                            ]
                        },
                        {
                            label: "角色",
                            name: "authorities",
                            className: "select2",
                            type: "select",
                            options: [],
                            validate: ["required"]
                        },
                        {
                            label: "头像",
                            name: "avatarUrl",
                            type: "hidden"
                        }
                    ],
                    i18n: Constants.editor.i18n.zh_CN
                }).on("open", function (event, main, action) {
                    // $("textarea", editor.s.fields["content"].dom.container).tinymce({
                    //     theme: "modern",
                    //     skin_url: "https://cdn.bootcss.com/tinymce/4.7.13/skins/lightgray"
                    // });

                    // 渲染表单控件样式
                    DataTables.Editor.requiredFieldLabel(editor, "render");

                    let authorities = [];
                    let options = [];
                    if (action === "edit") {
                        // 拥有的角色，转换成Option对象，并设置到select2的选项集中
                        authorities = editor.s.editFields[editor.field("username").val()].data["authorities"];
                        options = $.map(authorities, function (item) {
                            return new Option(item.description, item.authority, true, true);
                        });

                        // 清除密码
                        editor.field("password").val("");

                        // 用户名不许修改
                        editor.field("username").disable();
                    } else {
                        editor.field("username").enable();
                    }

                    // 加载角色
                    $("select", editor.s.fields["authorities"].dom.container).select2({
                        placeholder: '--- 请选择 ---',
                        allowClear: true,
                        multiple: true,
                        language: "zh-CN",
                        ajax: {
                            url: Constants.api.baseURI + "/roles",
                            type: "GET",
                            data: {
                                size: Constants.api.maxRow
                            },
                            headers: {
                                Authorization: "Bearer " + window.$cookies.get(Constants.api.tokenKey)
                            },
                            dataType: "json",
                            processResults: function (response) {
                                return {
                                    results: $.map(response.content, function (item) {
                                        if ($.inArray(item.authority, authorities) > 0) {
                                            return { id: item.authority, text: item.description, selected: true };
                                        } else {
                                            return { id: item.authority, text: item.description };
                                        }
                                    })
                                };
                            }
                        }
                    }).append(options).parent().find("span.select2-container").width("100%");

                }).on("preSubmit", function (event, object, action) {
                    editor.field("username").enable();

                    if (action === "create" || action === "edit") {

                        let dataKey;
                        if (action === "create") {
                            dataKey = "0";
                        } else if (action === "edit") {
                            dataKey = editor.field("username").val();
                        }

                        // 提交之前修改数据
                        object.data[dataKey].authorities = $.map($("select", editor.s.fields["authorities"].dom.container).val(), function (element) {
                            return { authority: element }
                        });

                        // 提交之前对数据校验
                        DataTables.Editor.validate(editor, object.data[dataKey]);
                    }

                    if (editor.inError()) {
                        return false;
                    }
                }).on("close", function (event) {
                    // 清除渲染
                    DataTables.Editor.requiredFieldLabel(editor, "clear");
                    $("select", editor.s.fields["authorities"].dom.container).find("option:selected").remove();
                });


                $("#user").DataTable(DataTables.options({
                    ajax: function (data, callback, setting) {
                        const params = DataTables.pageable(data, callback, setting);
                        if (Basic.notNull(data.search.value) && Basic.notBlank(data.search.value)) {
                            params.search = data.search.value;
                        }

                        let result = {};
                        Vue.axios.get("/users", {
                            params: params
                        }).then(response => {
                            result = DataTables.result(data.draw, response.data.totalElements, response.data.content);
                            callback(result)
                        });
                    },
                    columns: [
                      
                        { data: "username" },
                        { data: "displayName" },
                        { data: "email" },
                        /*{
                            data: "authorities",
                            orderable: false,
                            render: function (data, type, row, metadata) {
                                return $(data).map(function () {
                                    return this.description
                                }).get().join("，")
                            }
                        },
                        {
                            data: "enabled",
                            render: function (data, type, row, metadata) {
                                return data ? "启用" : "禁用"
                            }
                        }*/
                    ],
                    buttons: [
                        //{extend: 'create', editor: editor, text: '创建'},
                        {extend: 'edit', editor: editor, text: '编辑'},
                        {extend: 'remove', editor: editor, text: '删除'},
                        {
                            text: '刷新',
                            action: function (event, datatable, node, config) {
                                datatable.draw();
                            }
                        }
                    ]
                }));
            });
        }
    }
</script>

<style scoped>
</style>
