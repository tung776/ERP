<template>
  <div class="form-holder">
    <div class="inner">
      <ul class="dialog-tabs _forOverview">
        <li>
          <a href="javascript:;" class="active">Weekly Scheduler</a>
        </li>
        <li>
          <a href="javascript:;" class>Scheduled Pay</a>
        </li>
        <li>
          <a href="javascript:;" class>Default Profile</a>
        </li>
        <li>
          <a href="javascript:;" class>Payroll Earning</a>
        </li>
        <li>
          <a href="javascript:;" class>Payroll Deductions</a>
        </li>
        <li>
          <a href="javascript:;" class>Payroll Structure</a>
        </li>
        <li>
          <a href="javascript:;" class>Nationalities</a>
        </li>
        <li>
          <a href="javascript:;" class>Languages</a>
        </li>
      </ul>
      <div class="clearfix"></div>
      <div class="dialog-tabs-items">
        <div class="dialog-tabs-item active" id="weeklySchedulerTab">
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
                  <col width="20%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                  <col width="10%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                    <th>Su</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="57332c3b94ee1140b6bb49e2">
                    <td data-content="weeklyScheduler" data-id="57332c3b94ee1140b6bb49e2">UA-40</td>
                    <td data-type="input" data-content="totalHours">40</td>
                    <td data-type="input" data-content="1">8</td>
                    <td data-type="input" data-content="2">8</td>
                    <td data-type="input" data-content="3">8</td>
                    <td data-type="input" data-content="4">8</td>
                    <td data-type="input" data-content="5">8</td>
                    <td data-type="input" data-content="6">0</td>
                    <td data-type="input" data-content="7">0</td>
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
        <div class="dialog-tabs-item" id="scheduledPayTab">
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
                  <col width="70%">
                  <col width="30%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="5787a03231b2e2b73b43b6dd">
                    <td data-id="5787a03231b2e2b73b43b6dd">Monthly</td>
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
        <div class="dialog-tabs-item" id="defaultProfileTab">
          <div class="_defaultProfileWrap">
            <div class="_animateSelectBox">
              <span class="_selectTitle">Profile</span>
              <div class="_newSelectListWrap">
                <a id="allCurrencies" class="current-selected" href="javascript:;">admin</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="payrollEarningsTab">
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
                  <col width="70%">
                  <col width="30%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="5787a0940a81a89e3be04ef8">
                    <td data-content="el" data-id="5787a0940a81a89e3be04ef8">
                      <span>base formula</span>
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
        <div class="dialog-tabs-item" id="payrollDeductionsTab">
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
                  <col width="70%">
                  <col width="30%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="dialog-tabs-item" id="payrollStructureTab">
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
                  <col width="70%">
                  <col width="30%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="5787a09614d93c593b9b53b0">
                    <td data-content="el" data-id="5787a09614d93c593b9b53b0">
                      <span>Base Contract</span>
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
        <div class="dialog-tabs-item" id="nationalityTab">
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
                  <col width="70%">
                  <col width="30%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Nationality</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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

                  <tr data-id>
                    <td data-content="nationality"></td>
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
        <div class="dialog-tabs-item" id="languageTab">
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
                  <col width="70%">
                  <col width="30%">
                </colgroup>
                <thead>
                  <tr class="forToggle">
                    <th>Language</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="forToggle" id="currencyTable">
                  <tr data-id="5301e61b3d8b9898d5896e67">
                    <td data-content="language">English</td>
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