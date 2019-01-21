<template>
  <div id="content-holder" class="content-holder">
    <div class="inner-holder">
      <div class="workflow-list-wrapper left">
        <ul class="workflow-list">
          <li data-id="Applications" class="active">
            <a
              href="javascript:;"
              data-id="Applications"
              title="Applications"
              class="workflow"
            >Applications</a>
          </li>

          <li data-id="CRM Tasks">
            <a href="javascript:;" data-id="CRM Tasks" title="CRM Tasks" class="workflow">CRM Tasks</a>
          </li>

          <li data-id="Job positions">
            <a
              href="javascript:;"
              data-id="Job positions"
              title="Job positions"
              class="workflow"
            >Job positions</a>
          </li>

          <li data-id="Jobs">
            <a href="javascript:;" data-id="Jobs" title="Jobs" class="workflow">Jobs</a>
          </li>

          <li data-id="Leads">
            <a href="javascript:;" data-id="Leads" title="Leads" class="workflow">Leads</a>
          </li>

          <li data-id="Opportunities">
            <a
              href="javascript:;"
              data-id="Opportunities"
              title="Opportunities"
              class="workflow"
            >Opportunities</a>
          </li>

          <li data-id="Project Tasks">
            <a
              href="javascript:;"
              data-id="Project Tasks"
              title="Project Tasks"
              class="workflow"
            >Project Tasks</a>
          </li>

          <li data-id="Projects">
            <a href="javascript:;" data-id="Projects" title="Projects" class="workflow">Projects</a>
          </li>

          <li data-id="Purchase Invoice">
            <a
              href="javascript:;"
              data-id="Purchase Invoice"
              title="Purchase Invoice"
              class="workflow"
            >Purchase Invoice</a>
          </li>

          <li data-id="Purchase Order">
            <a
              href="javascript:;"
              data-id="Purchase Order"
              title="Purchase Order"
              class="workflow"
            >Purchase Order</a>
          </li>

          <li data-id="Sales Invoice">
            <a
              href="javascript:;"
              data-id="Sales Invoice"
              title="Sales Invoice"
              class="workflow"
            >Sales Invoice</a>
          </li>

          <li data-id="Sales Order">
            <a
              href="javascript:;"
              data-id="Sales Order"
              title="Sales Order"
              class="workflow"
            >Sales Order</a>
          </li>
        </ul>
      </div>
      <div id="workflowAccord" class="left">
        <div id="workflowNames"></div>
        <div id="details" class="workflow-details active">
          <!-- <div class="workflow-sub-list-wrapper left">
                <ul class="workflow-sub-list">
                </ul>
          </div>-->
          <div id="workflowSubAccord" class="left">
            <!--  <div id="workflowSubNames">
                    <div class="cathegory">
                      <a href="javascript:;">Element 1</a>
                    </div>
            </div>-->
            <div id="sub-details" class="workflow-details">
              <div class="listWorkflow">
                <div id="workflows" class="ui-sortable">
                  <div class="row">
                    <div
                      class="name"
                      id="528ce51cf3f67bc40b000015"
                      data-id="528ce51cf3f67bc40b000015"
                      data-sequence="7"
                    >
                      <span class="name">Initial Qualification</span>
                    </div>
                    <div class="status">
                      <span class="status">New</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="52fa5108a7bec22c19000018"
                      data-id="52fa5108a7bec22c19000018"
                      data-sequence="6"
                    >
                      <span class="name">Ready to teach</span>
                    </div>
                    <div class="status">
                      <span class="status">Pending</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="528ce53bf3f67bc40b000016"
                      data-id="528ce53bf3f67bc40b000016"
                      data-sequence="5"
                    >
                      <span class="name">First Interview</span>
                    </div>
                    <div class="status">
                      <span class="status">In Progress</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="528ce553f3f67bc40b000017"
                      data-id="528ce553f3f67bc40b000017"
                      data-sequence="4"
                    >
                      <span class="name">Second Interview</span>
                    </div>
                    <div class="status">
                      <span class="status">In Progress</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="528ce5e3f3f67bc40b000018"
                      data-id="528ce5e3f3f67bc40b000018"
                      data-sequence="3"
                    >
                      <span class="name">Internship</span>
                    </div>
                    <div class="status">
                      <span class="status">Pending</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="528ce61bf3f67bc40b000019"
                      data-id="528ce61bf3f67bc40b000019"
                      data-sequence="2"
                    >
                      <span class="name">Contract Signed</span>
                    </div>
                    <div class="status">
                      <span class="status">Hired</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="52d2c1369b57890814000005"
                      data-id="52d2c1369b57890814000005"
                      data-sequence="1"
                    >
                      <span class="name">Contract End</span>
                    </div>
                    <div class="status">
                      <span class="status">Cancelled</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="row">
                    <div
                      class="name"
                      id="528ce682f3f67bc40b00001a"
                      data-id="528ce682f3f67bc40b00001a"
                      data-sequence="0"
                    >
                      <span class="name">Refused</span>
                    </div>
                    <div class="status">
                      <span class="status">Cancelled</span>
                    </div>
                    <div class="edit-status">
                      <a class="btn slim blue edit" href="javascript:;">Edit</a>
                      <a class="btn slim delete" href="javascript:;">Delete</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div id="addedStatus"></div>
                <button class="btn blue icon-plus" id="addNewStatus">
                  <span>New</span>
                </button>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div id="timeRecivingDataFromServer">Created in 188 ms</div>
  </div>
</template>

<script>
export default {
  layout(contex) {
    return "erp";
  }
};
</script>