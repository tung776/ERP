<template>
  <div id="content-holder" class="content-holder">
    <div class="_overviewPanelWrap">
      <a href="organizationSettings" class="_overviewPanelLink">
        <div id="organizationView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-01.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Organization Profile</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="Accounts" class="_overviewPanelLink">
        <div id="accountingView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-04.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Accounting</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="productsSettings" class="_overviewPanelLink">
        <div id="productsView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-05.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Products Configurations</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="settingsEmployee" class="_overviewPanelLink">
        <div id="employeesView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-08.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Employees Details</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="Profiles" class="_overviewPanelLink">
        <div id="profilesView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-02.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Access Profiles</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="Users" class="_overviewPanelLink">
        <div id="usersView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-03.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>System Users</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="Departments" class="_overviewPanelLink">
        <div id="departmentsView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-07.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Departments</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="Workflows" class="_overviewPanelLink">
        <div id="workflowsView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-06.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Workflows</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
      
      <a href="Integrations" class="_overviewPanelLink">
        <div id="integrationsView" class="_overviewPanel mainSettings">
          <div class="_overviewImg">
            <img src="/img/erp_icons-01.svg" alt>
          </div>
          <div class="_overviewTitle">
            <span>Integrations</span>
          </div>
          <div class="_overviewDesc"></div>
        </div>
      </a>
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

<style scoped>
._overviewPanelWrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
._overviewPanelWrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
._overviewPanelLink {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: 230px;
  flex-basis: 230px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #d8dde6;
  text-decoration: none !important;
}
._overviewPanel {
  height: 290px;
  min-height: 290px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
._overviewPanelLink:nth-child(1) ._overviewImg {
  /* background-image: url("../../img/erp_icons-01.svg"); */
}
._overviewPanel ._overviewTitle {
  margin-top: 20px;
  color: #2d3033;
  text-align: center;
  font-size: 13px;
}
._overviewPanel ._overviewDesc {
  border-top: 1px #e2e6e8 dotted;
  margin-top: 30px;
  padding: 15px;
  color: #6c7279;
}
</style>
