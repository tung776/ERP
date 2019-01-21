<template>
  <div class="form-holder tabsHolder">
    <div class="inner">
      <ul class="dialog-tabs _forOverview">
        <li>
          <a href="javascript:;" class="active">Warehouse</a>
        </li>
        <li>
          <a href="javascript:;">Price Lists</a>
        </li>
        <li>
          <a href="javascript:;">Product Types</a>
        </li>
        <li>
          <a href="javascript:;">Product Options</a>
        </li>
        <li>
          <a href="javascript:;">Product Categories</a>
        </li>
        <li>
          <a href="javascript:;">Shipping Methods</a>
        </li>
      </ul>
      <div class="clearfix"></div>
      <div class="dialog-tabs-items">
        <div class="dialog-tabs-item active" id="warehouseTab">
          <div class="_acountingTableWrap">
            <div class="_acountingTitleBlock _forOverview">
              <a
                href="javascript:;"
                class="btn blue slim icon-plus btnPositioned"
                title="Create"
                id="top-bar-createBtn"
              >New</a>
            </div>
            <div class="_acountingTableBlock _locationTableWrap">
              <table class="list tableProjects tableFixed _locationTable">
                <colgroup>
                  <col width="24%">
                  <col width="14%">
                  <col width="14%">
                  <col width="24%">
                  <col width="24%">
                  <col width="70px">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th>Is Own</th>
                    <th>Is Main</th>
                    <th>Locations</th>
                    <th>Zones</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="57dfc6ea6066337b771e99e2">
                    <td>Main Warehouse</td>
                    <td>
                      <input type="checkbox" disabled checked>
                    </td>
                    <td>
                      <input type="checkbox" class="mainCheckbox" disabled checked>
                    </td>
                    <td class="location">
                      <span class="_tagSmall grey">Alsle.Bay.Shelf.Bin</span>
                    </td>
                    <td class="zone"></td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="priceListsTab">
          <div class="_acountingTableWrap">
            <div class="_acountingTitleBlock">
              <a
                href="javascript:;"
                class="btn blue slim icon-plus btnPositioned"
                title="Create"
                id="top-bar-createBtn"
              >New</a>
            </div>
            <div class="_acountingTableBlock">
              <table class="list tableProjects tableFixed _currencyTable">
                <colgroup>
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                  <col width="70px">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th>Code</th>
                    <th>Currency</th>
                    <th>For Cost</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="58109ae869b3249417f74baf">
                    <td>Sale Prices</td>
                    <td>PL2</td>
                    <td>USD</td>
                    <td>
                      <input type="checkbox" disabled>
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>

                  <tr data-id="58109ae869b3249417f74bae">
                    <td>Default Costs</td>
                    <td>PL1</td>
                    <td>USD</td>
                    <td>
                      <input type="checkbox" disabled checked>
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="productTypesTab">
          <div class="_acountingTableWrap">
            <div class="_acountingTitleBlock">
              <a
                href="javascript:;"
                class="btn blue slim icon-plus btnPositioned"
                title="Create"
                id="top-bar-createBtn"
              >New</a>
            </div>
            <div class="_acountingTableBlock">
              <table class="list tableProjects tableFixed _currencyTable">
                <colgroup>
                  <col width="33.333%">
                  <col width="33.333%">
                  <col width="33.333%">
                  <col width="70px">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th>Products Count</th>
                    <th>Product Options</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="58453a4afc8d676a511283d0">
                    <td>Default</td>
                    <td>34</td>
                    <td></td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="productOptionsTab">
          <div class="_acountingTableWrap">
            <div class="_acountingTitleBlock">
              <a
                href="javascript:;"
                class="btn blue slim icon-plus btnPositioned"
                title="Create"
                id="top-bar-createBtn"
              >New</a>
            </div>
            <div class="_acountingTableBlock">
              <table class="list tableProjects tableFixed _currencyTable">
                <colgroup>
                  <col width="75%">
                  <col width="25%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="58987e881e3042f0389eaec8">
                    <td>Size</td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>

                  <tr data-id="58987ec11e3042f0389eaed0">
                    <td>Color</td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="productCategoriesTab">
          <div class="flex productContentWrap">
            <div class="_acountingTitleBlock">
              <a
                href="javascript:;"
                class="btn blue slim icon-plus btnPositioned"
                title="Create"
                id="top-bar-createBtn"
              >New</a>
            </div>
            <div id="productTree" class="fullWidth">
              <ul class="groupList">
                <li
                  class="item parent"
                  data-id="564591f9624e48551dfe3b23"
                  data-fullname="All"
                  data-level="1"
                  data-sequence="0"
                >
                  <span class="content selected">
                    <span class="text">
                      <span class="_contentValue">All</span>
                      <span class="_contentCount">(2)</span>
                    </span>
                    <span class="action-btn">
                      <span class="editCategory icon-note" title="Edit"></span>
                    </span>
                  </span>
                  
                  <a class="expand icon-folder3" href="javascript:;"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="shippimhMethodTab">
          <div class="_acountingTableWrap">
            <div class="_acountingTitleBlock _forOverview">
              <a
                href="javascript:;"
                class="btn blue slim icon-plus btnPositioned"
                title="Create"
                id="top-bar-createBtn"
              >New</a>
            </div>
            <div class="_acountingTableBlock">
              <table class="list tableProjects tableFixed _currencyTable">
                <colgroup>
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                  <col width="25%">
                  <col width="70px">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Code</th>
                    <th>Name</th>
                    <th>Account</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="589dfb0df37502fb4918753a">
                    <td>D1</td>
                    <td>Delivery</td>
                    <td>220001 Shipping Expenses</td>
                    <td>0.00</td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>

                  <tr data-id="589dfb208ff47cd84989ad4f">
                    <td>DHL</td>
                    <td>DHL</td>
                    <td>220001 Shipping Expenses</td>
                    <td>0.00</td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>

                  <tr data-id="589dfbf28ff47cd84989ad50">
                    <td>F1</td>
                    <td>Fedex</td>
                    <td>220001 Shipping Expenses</td>
                    <td>0.00</td>
                    <td>
                      <a
                        href="javascript:;"
                        class="icon-note goToEdit _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                      <a
                        href="javascript:;"
                        class="icon-trash goToRemove _actionCircleBtn"
                        aria-hidden="true"
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(contex) {
    return "erp";
  }
};
</script>