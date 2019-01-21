<template>
  <div id="content-holder" class="content-holder">
    <div class="inner-holder _settingsHolder">
      <div class="workflow-list-wrapper left">
        <ul id="profilesList" class="workflow-list profile-list">
          <li class="active">
            <a href="#easyErp/Profiles" data-id="1387275598000" title="admin">admin Profile</a>
          </li>

          <li>
            <a href="#easyErp/Profiles" data-id="1387275504000" title="banned">banned Profile</a>
          </li>
        </ul>
      </div>
      <div id="profileTableWrapper" class="left">
        <table class="list _modulesAccessTable" id="modulesAccessTable" style="display: table;">
          <colgroup>
            <col width="55%">
            <col width="15%">
            <col width="15%">
            <col width="15%">
          </colgroup>
          <thead>
            <tr>
              <th>Module Name</th>
              <th>View
                <br>
                <input type="checkbox" disabled>
              </th>
              <th>Write/Edit
                <br>
                <input type="checkbox" disabled>
              </th>
              <th>Delete
                <br>
                <input type="checkbox" disabled>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="parent" data-i="0">
              <td class="mname">Settings</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="2">
              <td class="mname">System Users</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="4">
              <td class="mname">Departments</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="13">
              <td class="mname">Workflows</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="16">
              <td class="mname">Access Profiles</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="70">
              <td class="mname">Employees Details</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="71">
              <td class="mname">Accounting</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="79">
              <td class="mname">Organization Profile</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="83">
              <td class="mname">Organization Profile</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="100">
              <td class="mname">Products Configurations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="104">
              <td class="mname">General</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="105">
              <td class="mname">Taxes</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="106">
              <td class="mname">Warehouse</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="5">
              <td class="mname">CRM</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="6">
              <td class="mname">Leads</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="7">
              <td class="mname">Opportunities</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="14">
              <td class="mname">Persons</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="15">
              <td class="mname">Companies</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="26">
              <td class="mname">Payments</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="28">
              <td class="mname">Quotations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="29">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="30">
              <td class="mname">Invoices</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="31">
              <td class="mname">Product</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="36">
              <td class="mname">Profit</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="37">
              <td class="mname">Product</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="50">
              <td class="mname">Invoice Aging</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="55">
              <td class="mname">Invoice Charts</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="57">
              <td class="mname">Proforma</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="63">
              <td class="mname">Proforma</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="76">
              <td class="mname">Tasks</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="77">
              <td class="mname">Followers</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="78">
              <td class="mname">Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="91">
              <td class="mname">Invoices</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="92">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="8">
              <td class="mname">Project</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="9">
              <td class="mname">Projects</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="10">
              <td class="mname">Tasks</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="19">
              <td class="mname">Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="32">
              <td class="mname">Planning</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="38">
              <td class="mname">Time Card</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="46">
              <td class="mname">Jobs Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="49">
              <td class="mname">Jobs Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="81">
              <td class="mname">Contract Jobs</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="82">
              <td class="mname">Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="20">
              <td class="mname">Purchases</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="21">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="22">
              <td class="mname">Invoices</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="23">
              <td class="mname">Quotations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="75">
              <td class="mname">Payments</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="93">
              <td class="mname">Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="94">
              <td class="mname">Invoices</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="95">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="25">
              <td class="mname">Accounting</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="51">
              <td class="mname">Chart of Accounts</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="53">
              <td class="mname">Journal</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="54">
              <td class="mname">Journal Entries</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="58">
              <td class="mname">Balance Sheet</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="59">
              <td class="mname">Cash Flow</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="60">
              <td class="mname">Close Month</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="61">
              <td class="mname">Profit And Loss</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="62">
              <td class="mname">Trial Balance</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="65">
              <td class="mname">Inventory Report</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="72">
              <td class="mname">Cash Book</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="73">
              <td class="mname">Cash Transfer</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="84">
              <td class="mname">Manual Entry</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="85">
              <td class="mname">Manual Entry</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="43">
              <td class="mname">HR</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="3">
              <td class="mname">Job Positions</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="11">
              <td class="mname">Employees</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="12">
              <td class="mname">Applications</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="17">
              <td class="mname">Birthdays</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="33">
              <td class="mname">Attendance</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="41">
              <td class="mname">Vacations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="42">
              <td class="mname">HR Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="45">
              <td class="mname">Capacity</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="47">
              <td class="mname">Products Configuration</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="27">
              <td class="mname">Payout</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="34">
              <td class="mname">Bonus Type</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="39">
              <td class="mname">Holidays</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="40">
              <td class="mname">Payroll Expenses</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="44">
              <td class="mname">Efficiency</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="48">
              <td class="mname">Payroll Payments</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="56">
              <td class="mname">Salary Report</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="68">
              <td class="mname">Dividend Declarations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="69">
              <td class="mname">Dividend Payments</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="80">
              <td class="mname">Dashboard</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="64">
              <td class="mname">Expenses</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="35">
              <td class="mname">Cost center</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="66">
              <td class="mname">Expenses Payments</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="67">
              <td class="mname">Expenses</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="74">
              <td class="mname">WriteOff</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="89">
              <td class="mname">Integrations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="111">
              <td class="mname">Etsy</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="112">
              <td class="mname">General</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="113">
              <td class="mname">Shopify</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="114">
              <td class="mname">Woo</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="128">
              <td class="mname">Magento</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="90">
              <td class="mname">Inventory</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="24">
              <td class="mname">Products</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="52">
              <td class="mname">Product Options</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="88">
              <td class="mname">Goods-out Notes</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="96">
              <td class="mname">Stock Correction</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="98">
              <td class="mname">Transfers</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="99">
              <td class="mname">Price Lists</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="101">
              <td class="mname">Product Types</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="108">
              <td class="mname">Stock Returns</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="102">
              <td class="mname">Reports</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="18">
              <td class="mname">CRM</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="86">
              <td class="mname">General</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="87">
              <td class="mname">Inventory</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="97">
              <td class="mname">Stock Detail</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="103">
              <td class="mname">Sales</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="107">
              <td class="mname">General</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="109">
              <td class="mname">Dashboards</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="110">
              <td class="mname">Integrations</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="111">
              <td class="mname">Etsy</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="112">
              <td class="mname">General</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="113">
              <td class="mname">Shopify</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="114">
              <td class="mname">Woo</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="128">
              <td class="mname">Magento</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="parent" data-i="116">
              <td class="mname">Manufacturing</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="115">
              <td class="mname">Bill Of Materials</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="117">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="118">
              <td class="mname">Work Centers</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="119">
              <td class="mname">Routing</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="120">
              <td class="mname">Work Centers</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="121">
              <td class="mname">Routing</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="122">
              <td class="mname">Bill Of Materials</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="123">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="124">
              <td class="mname">Work Centers</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="125">
              <td class="mname">Routing</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="126">
              <td class="mname">Bill Of Materials</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
            <tr class="child" data-i="127">
              <td class="mname">Orders</td>
              <td>
                <input type="checkbox" class="read" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="write" checked="checked" disabled>
              </td>
              <td>
                <input type="checkbox" class="delete" checked="checked" disabled>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="timeRecivingDataFromServer">Created in 161 ms</div>
  </div>
</template>

<script>
export default {
  layout(contex) {
    return "erp";
  }
};
</script>