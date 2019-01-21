<template>
  <div class="form-holder">
    <ul class="dialog-tabs _forOverview">
      <li>
        <a href="javascript:;" class="active">Currency</a>
      </li>
      <li>
        <a href="javascript:;">Currency Rates</a>
      </li>
      <li>
        <a href="javascript:;" class>Bank Accounts</a>
      </li>
      <li>
        <a href="javascript:;" class>Payment Terms</a>
      </li>
      <li>
        <a href="javascript:;">Taxes</a>
      </li>
      <li>
        <a href="javascript:;">Default Settings</a>
      </li>
      <li>
        <a href="javascript:;">Accounting Categories</a>
      </li>
      <li>
        <a href="javascript:;">Expenses Categories</a>
      </li>
    </ul>
    <div class="dialog-tabs-items">
      <div class="dialog-tabs-item active" id="currencyTab">
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
            <span>You can change Base Currency in
              <a class="_link" href="#easyErp/organizationSettings">Organization Profile</a>
            </span>
            <table class="list tableProjects tableFixed _currencyTable">
              <colgroup>
                <col width="40%">
                <col width="40%">
                <col width="20%">
                <col width="20%">
              </colgroup>
              <thead>
                <tr class="forToggle">
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Active</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="forToggle" id="currencyTable">
                <tr data-id="USD" class="gery">
                  <td class="_baseCurrency">
                    <span>USD</span>
                    <div>(Base Currency)</div>
                  </td>
                  <td>
                    <span>$</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td>
                    <a
                      href="javascript:;"
                      class="icon-note goToEdit _actionCircleBtn"
                      aria-hidden="true"
                    ></a>
                  </td>
                </tr>

                <tr data-id="EUR" class="gery">
                  <td>
                    <span>EUR</span>
                  </td>
                  <td>
                    <span>€</span>
                  </td>
                  <td>
                    <span>Yes</span>
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
      <div class="dialog-tabs-item" id="ratesTab">
        <div class="_acountingTableWrap">
          <div class="_acountingTitleBlock _forOverview">
            <a
              href="javascript:;"
              class="btn blue slim plus icon-plus btnPositioned _createRates"
              title="Create Rates"
              id="createRates"
            >New</a>
            <div id="dateFilter" class="vocationFilter _filterDropDownWrap">
              <!--<div id="customDashboardChartsDateFilter" class="vocationFilter _filterDropDownWrap">-->
              <ul class="dateFilter">
                <li class="dateRange">
                  <span class="icon-calendar"></span>
                  <span class="startDateValue">01, Jan 2019</span> -
                  <span class="endDateValue">20, Jan 2019</span>
                  <span class="icon-arrow-down2"></span>
                </li>
                <li>
                  <ul class="frameDetail _filterDropDownBody hidden">
                    <li class="filterValues checked" data-id="thisMonth">
                      <span class="icon icon-checked2"></span>

                      
                      This Month
                    </li>

                    <li class="filterValues checked" data-id="thisFinYear">
                      <span class="icon icon-checked2"></span>

                      
                      This Financial Year
                    </li>

                    <li class="listLine"></li>

                    <li class="filterValues checked" data-id="lastMonth">
                      <span class="icon icon-checked2"></span>

                      
                      Last Month
                    </li>

                    <li class="filterValues checked" data-id="lastQuarter">
                      <span class="icon icon-checked2"></span>

                      
                      Last Quarter
                    </li>

                    <li class="filterValues checked" data-id="lastFinYear">
                      <span class="icon icon-checked2"></span>

                      
                      Last Financial Year
                    </li>

                    <li class="listLine"></li>

                    <li class="filterValues checked checkedValue" data-id="custom">
                      <span class="icon icon-checked2"></span>

                      
                      Custom Dates
                    </li>
                    <li id="customDashboardChartsCustomDateBlock" class="customTime hidden">
                      <div class="customTimeItem">
                        <label for="startDatecustomDashboardCharts">Start Date:</label>
                        <input
                          readonly
                          type="text"
                          id="startDatecustomDashboardCharts"
                          data-name="startDate"
                          class="hasDatepicker"
                        >
                      </div>
                      <div class="customTimeItem">
                        <label for="endDatecustomDashboardCharts">End Date:</label>
                        <input
                          readonly
                          type="text"
                          id="endDatecustomDashboardCharts"
                          data-name="endDate"
                          class="hasDatepicker"
                        >
                      </div>
                      <div class="buttons">
                        <button class="updateBtn btn">
                          <span>Update</span>
                        </button>
                        <button class="cancelBtn btn">
                          <span>Cancel</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <!--
              </div>-->
            </div>
            <a
              href="javascript:;"
              class="btn blue slim _createRates"
              title="Load Rates"
              id="loadRates"
            >Load Rates</a>
            <div id="rates">
              <table class="list tableProjects tableFixed _currencyTable" id="ratesTable">
                <colgroup>
                  <col width="30%">
                  <col width="60%">
                  <col width="10%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Date</th>
                    <th>Rates</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable"></tbody>
              </table>
            </div>
          </div>
          <div class="_acountingTableBlock _forOverview">
            <!--<a href="javascript:;"-->
            <!--class="btn blue slim btnPositioned _createRates"-->
            <!--title="Load Rates"-->
            <!--id="loadRates" >Load Rates</a>-->
            <!--<div id="rates"></div>-->
          </div>
        </div>
      </div>
      <div class="dialog-tabs-item" id="paymentMethodTab">
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
            <table class="list tableProjects tableFixed _acountingTable">
              <colgroup>
                <col width="25%">
                <col width="15%">
                <col width="20%">
                <col width="20%">
                <col width="10%">
                <col width="10%">
              </colgroup>
              <thead>
                <tr class="forToggle">
                  <th>Name</th>
                  <th>Bank</th>
                  <th>Account</th>
                  <th>Chart of Account</th>
                  <th>Currency</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="forToggle" id="paymentMethodsTable">
                <tr data-id="565f2e05ab70d49024242e10">
                  <td>
                    <span>CASH EUR</span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span>CASH EUR</span>
                  </td>
                  <td>
                    <span>101502 Cash EUR</span>
                  </td>
                  <td>
                    <span>EUR</span>
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

                <tr data-id="565f2e05ab70d49024242e0f">
                  <td>
                    <span>CASH USD</span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span>CASH USD</span>
                  </td>
                  <td>
                    <span>101500 Cash USD</span>
                  </td>
                  <td>
                    <span>USD</span>
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
      <div class="dialog-tabs-item" id="paymentTermsTab">
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
            <table class="list tableProjects tableFixed _paymentTable">
              <colgroup>
                <col width="40%">
                <col width="40%">
                <col width="20%">
              </colgroup>
              <thead>
                <tr class="forToggle">
                  <th>Name</th>
                  <th>Number of days</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="forToggle" id="paymentTermsTable">
                <tr data-id="55536e52475b7be475f335fa">
                  <td>
                    <span>Custom</span>
                  </td>
                  <td>
                    <span></span>
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

                <tr data-id="55536e52475b7be475f335fb">
                  <td>
                    <span>Due on Receipt</span>
                  </td>
                  <td>
                    <span></span>
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

                <tr data-id="55536e52475b7be475f335f6">
                  <td>
                    <span>Net 15</span>
                  </td>
                  <td>
                    <span>15</span>
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

                <tr data-id="55536e52475b7be475f335f7">
                  <td>
                    <span>Net 30</span>
                  </td>
                  <td>
                    <span>30</span>
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

                <tr data-id="55536e52475b7be475f335f8">
                  <td>
                    <span>Net 45</span>
                  </td>
                  <td>
                    <span>45</span>
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

                <tr data-id="55536e52475b7be475f335f9">
                  <td>
                    <span>Net 60</span>
                  </td>
                  <td>
                    <span>60</span>
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
      <div class="dialog-tabs-item" id="taxesTab">
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
                <col width="10%">
                <col width="20%">
                <col width="20%">
                <col width="20%">
                <col width="20%">
                <col width="10%">
              </colgroup>
              <thead>
                <tr class="forToggle">
                  <th>Code</th>
                  <th>Name</th>
                  <th>Rate</th>
                  <th>Country</th>
                  <th>Default</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="forToggle" id="taxTable">
                <tr data-id="589894b749cd23e02ca7c323">
                  <td>DT</td>
                  <td>Default Tax</td>
                  <td>
                    <span class="fontSemiBold">15.00 %</span>
                  </td>
                  <td></td>
                  <td>
                    <input type="checkbox" checked="checked" class="checkBox" disabled>
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
      <div class="dialog-tabs-item" id="defaultsTab">
        <div class="_accountingSettingWrap">
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Sale Tax Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="salesTax"
                  class="account current-selected"
                  data-id="565eb53a6aa50532e5df0b12"
                >111201 VAT Deductible (Sales)</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Purchase Tax Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="purchaseTax"
                  class="account current-selected"
                  data-id="565eb53a6aa50532e5df0b17"
                >102001 VAT Deductible (Purchase)</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Payable Tax Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="payableTax"
                  class="account current-selected"
                  data-id="565eb53a6aa50532e5df0b19"
                >102002 Taxes Payable</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Carried Tax Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="carriedTax"
                  class="account current-selected"
                  data-id="565eb53a6aa50532e5df0b18"
                >111202 VAT Carried Forward</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Shipping Expenses Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="shipping"
                  class="account current-selected"
                  data-id="565eb53a6aa50532e5df0b20"
                >220001 Shipping Expenses</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Sales Discount Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="discount"
                  class="account current-selected"
                  data-id="565eb53a6aa50532e5df0b21"
                >220002 Sales Discount</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Bank Account</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="bankAccount"
                  class="account current-selected"
                  data-id
                >Select</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Work In Progress (for Manufacturing)</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="workInProgress"
                  class="account current-selected"
                  data-id
                >Select</a>
              </div>
            </div>
          </div>
          <div class="col m-6 l-4 settingItem">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Default Payment Term</span>
              <div class="_newSelectListWrap">
                <a
                  href="javascript:;"
                  id="paymentTerm"
                  class="account current-selected"
                  data-id
                >Select</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-tabs-item" id="accountingCategoriesTab">
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
            <div id="productTree">
              <ul id="groupList" class="groupList _notClicked ui-sortable">
                <li
                  class="child disabled"
                  data-id="5810c75b2b225158086d7f7e"
                  data-level="0"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Income Summary
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                </li>
                <li
                  class="child disabled"
                  data-id="5810c75b2b225158086d7f7f"
                  data-level="0"
                  data-sequence="1"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Equity
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                </li>
                <li
                  class="child disabled"
                  data-id="5810c75b2b225158086d7f89"
                  data-level="0"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Expenses
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                </li>
                <li
                  class="child disabled"
                  data-id="5810c75b2b225158086d7f85"
                  data-level="0"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Other Income
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                </li>
                <li
                  class="child disabled"
                  data-id="5810c75b2b225158086d7f83"
                  data-level="0"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Income
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                </li>
                <li
                  class="child disabled"
                  data-id="5810c75b2b225158086d7f86"
                  data-level="0"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Prepayments
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                </li>
                <li
                  class="disabled parent"
                  data-id="584e47953d2d06b40d2e9dc0"
                  data-level="1"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Liabilities
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                  <ul style="margin-left:20px" class="ui-sortable">
                    <li
                      class="child disabled"
                      data-id="5810c75b2b225158086d7f88"
                      data-level="1"
                      data-sequence="0"
                    >
                      <span class="content">
                        <span class="dotted-line"></span>
                        <span class="text">Current Liabilities
                          <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                        </span>
                      </span>
                    </li>
                    <li
                      class="child disabled"
                      data-id="5810c75b2b225158086d7f8a"
                      data-level="1"
                      data-sequence="0"
                    >
                      <span class="content">
                        <span class="dotted-line"></span>
                        <span class="text">Non-current Liabilities
                          <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li
                  class="disabled parent"
                  data-id="584aa1e84881bdc437c60828"
                  data-level="1"
                  data-sequence="0"
                >
                  <span class="content">
                    <span class="dotted-line"></span>
                    <span class="text">Assets
                      <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                    </span>
                  </span>
                  <ul style="margin-left:20px" class="ui-sortable">
                    <li
                      class="child disabled"
                      data-id="5810c75b2b225158086d7f82"
                      data-level="1"
                      data-sequence="1"
                    >
                      <span class="content">
                        <span class="dotted-line"></span>
                        <span class="text">Fixed Assets
                          <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                        </span>
                      </span>
                    </li>
                    <li
                      class="child disabled"
                      data-id="5810c75b2b225158086d7f84"
                      data-level="1"
                      data-sequence="2"
                    >
                      <span class="content">
                        <span class="dotted-line"></span>
                        <span class="text">Non-current Assets
                          <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                        </span>
                      </span>
                    </li>
                    <li
                      class="disabled parent"
                      data-id="5810c75b2b225158086d7f80"
                      data-level="2"
                      data-sequence="3"
                    >
                      <span class="content">
                        <span class="dotted-line"></span>
                        <span class="text">Current Assets
                          <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                        </span>
                      </span>
                      <ul style="margin-left:20px" class="ui-sortable">
                        <li
                          class="child disabled"
                          data-id="5810c75b2b225158086d7f81"
                          data-level="3"
                          data-sequence="4"
                        >
                          <span class="content">
                            <span class="dotted-line"></span>
                            <span class="text">Bank and Cash
                              <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                            </span>
                          </span>
                        </li>
                        <li
                          class="child disabled"
                          data-id="5810c75b2b225158086d7f87"
                          data-level="3"
                          data-sequence="5"
                        >
                          <span class="content">
                            <span class="dotted-line"></span>
                            <span class="text">Inventory
                              <span title="Edit" class="editCategoryItem edit icon-pencil"></span>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-tabs-item" id="expensesCategoriesTab">
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
            <div id="productTree">
              <ul id="groupList" class="groupList _notClicked ui-sortable"></ul>
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