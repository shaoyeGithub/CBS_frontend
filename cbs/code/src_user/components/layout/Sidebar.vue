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
                    <a><i class="fa fa-money"></i> <span>信息管理</span></a>
                </router-link>

                <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-key"></i> <span>账户管理</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/ManyAnalysis">
                            <a><i class="fa fa-search"></i> <span>消费查询</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/system/role">
                            <a><i class="fa fa-dollar"></i> <span>充值</span></a>
                        </router-link>
                    </ul>
                </li>

               

                <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-file"></i> <span>套餐管理</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/Package">
                            <a><i class="fa fa-search"></i> <span>查询套餐</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/Package">
                            <a><i class="fa fa-circle"></i> <span>所有套餐</span></a>
                        </router-link>
                    </ul>
                </li>
                
                 <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-search"></i> <span>记录查询</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/system/user">
                            <a><i class="fa fa-phone"></i> <span>通话记录</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/system/role">
                            <a><i class="fa fa-circle"></i> <span>短信记录</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/system/role">
                            <a><i class="fa fa-user-secret"></i> <span>流量记录</span></a>
                        </router-link>
                    </ul>
                </li>
                <li class="treeview" :class="{'active': treeview === 'system'}">
                    <a href="#">
                        <i class="fa fa-dashboard"></i> <span>图表分析</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" active-class="active" to="/subcomponents/manyanalysis">
                            <a><i class="fa fa-tree"></i> <span>多数据项分析</span></a>
                        </router-link>
                        <router-link tag="li" active-class="active" to="/subcomponents/useranalysis">
                            <a><i class="fa fa-table"></i> <span>单数据项分析</span></a>
                        </router-link>
                    </ul>
                </li>

                 <router-link tag="li" active-class="active" to="/subcomponents/call">
                            <a><i class="fa fa-phone"></i> <span>模拟电话</span></a>
                </router-link>
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

