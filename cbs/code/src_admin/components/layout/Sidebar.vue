<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar Menu -->
            <ul class="sidebar-menu">
                <li class="header">主导航</li>
                <!-- Optionally, you can add icons to the links -->
                <router-link tag="li" active-class="active" to="/dashboard">
                    <a><i class="fa fa-money"></i> <span>系统统计</span></a>
                </router-link>

                <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-user"></i> <span>用户管理</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/UserManager">
                            <a><i class="fa fa-circle"></i> <span>用户查询</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/UserManager">
                            <a><i class="fa fa-dollar"></i> <span>管理员查询</span></a>
                        </router-link>
                    </ul>
                </li>

               

                <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-industry"></i> <span>套餐管理</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/Package">
                            <a><i class="fa fa-search"></i> <span>查询套餐</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/AddPackage">
                            <a><i class="fa fa-circle"></i> <span>增加套餐</span></a>
                        </router-link>
                    </ul>
                </li>
                
                 <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-search"></i> <span>数据库管理</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/Database">
                            <a><i class="fa fa-phone"></i> <span>MySQL</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/Database">
                            <a><i class="fa fa-circle"></i> <span>Redis</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/Database">
                            <a><i class="fa fa-user-secret"></i> <span>MongoDB</span></a>
                        </router-link>
                    </ul>
                </li>
                

                 <router-link tag="li" active-class="active" to="/subcomponents/call">
                            <a><i class="fa fa-file"></i> <span>生成话单</span></a>
                </router-link>
                <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-search"></i> <span>管理员分析</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/PackageAnalysis">
                            <a><i class="fa fa-phone"></i> <span>套餐分析</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/AdminAnalysis">
                            <a><i class="fa fa-circle"></i> <span>用户趋势</span></a>
                        </router-link>
                    </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        data: function () {
            var treeview = null;

            // 从路由中获取当前路径
            var path = this.$route.path;

            if (path.startsWith('/')) {
                path = path.substring(1, path.length);
                treeview = path.split('/')[0];
            }

            return { treeview: treeview }
        }
    }
</script>

