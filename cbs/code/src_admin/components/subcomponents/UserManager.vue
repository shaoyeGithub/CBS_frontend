<template>
<div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Data Table With Full Features</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">用户姓名</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">电话号码</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">地址</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">余额</th>
                        <th aria-label="CSS grade: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">信用等级</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="sorting_1">Blink</td>
                        <td>18792039333</td>
                        <td>无锡</td>
                        <td>54</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18992039333</td>
                        <td>南京</td>
                        <td>34</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>13893039333</td>
                        <td>南京</td>
                        <td> 67</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>13913123123</td>
                        <td>南京</td>
                        <td> 67</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>15294039333</td>
                        <td>苏州</td>
                        <td>1.9</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18259234203</td>
                        <td>常州</td>
                        <td> 67</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18296039322</td>
                        <td>扬州</td>
                        <td> 67</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18297039337</td>
                        <td>杭州</td>
                        <td>34</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18290739336</td>
                        <td>马鞍山</td>
                        <td>34</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18290839334</td>
                        <td>南京</td>
                        <td> 67</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>18290399333</td>
                        <td>安徽</td>
                        <td>1</td>
                        <td>A</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">用户姓名</th>
                        <th colspan="1" rowspan="1">电话号码</th>
                        <th colspan="1" rowspan="1">地址</th>
                        <th colspan="1" rowspan="1">余额</th>
                        <th colspan="1" rowspan="1">信用等级</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
    </div>
</div>
</div>
</div>
</template>
<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')
export default {
  name: 'Tables',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>