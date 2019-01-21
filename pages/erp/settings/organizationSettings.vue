<template>
  <div class="form-holder _orgSettingsWrap">
    <form class="form _orgSettings">
      <div class="_formGroup">
        <div class="col m-3 l-2 hide-xs">
          <label class>Your Logo</label>
        </div>
        <div class="col m-8 inputBox">
          <div class="avatar">
            <div class="upload" style="height: 0px;">
              Edit
              <input type="file" value="Edit" id="inputImg" accept="image/*">
            </div>
            <canvas id="avatar" width="140" height="140"></canvas>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <div class="col m-3 l-2 hide-xs">
          <label class="_orgName">Organization Name</label>
        </div>
        <div class="col m-8 inputBox">
          <div class="_animateInputBox _withInfo">
            <input
              type="text"
              class="_animate editable"
              id="name"
              value="TeamSmart"
              autofocus
              required
            >
            <label class="_animate">Organization Name</label>
            <span class="tips icon-info" data-id="name"></span>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <div class="col m-3 l-2 hide-xs">
          <label class="_orgName">Industry</label>
        </div>
        <div class="col m-8 inputBox">
          <div class="_animateSelectBox _withInfo">
            <span class="_selectTitle">Industry</span>
            <div class="_newSelectListWrap">
              <a
                class="address current-selected"
                id="industry"
                data-id="574c54e22b7598157b94f14c"
              >Information Technology/IT</a>
            </div>
            <span class="tips icon-info" data-id="industry"></span>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <h4 class="col m-8 m-offset-3 l-offset-2">Company Address</h4>
        <div class="col m-8 m-offset-3 l-offset-2 inputBox">
          <div class="row">
            <div class="col m-8">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="address_street" required value>
                <label class="_animate">Street</label>
              </div>
            </div>
            <div class="col m-4">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="address_city" required value>
                <label class="_animate">City</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <div class="col m-8 m-offset-3 l-offset-2 inputBox">
          <div class="row">
            <div class="col m-4">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="address_state" required value>
                <label class="_animate">State</label>
              </div>
            </div>
            <div class="col m-4">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="address_zip" required value>
                <label class="_animate">Zip Code</label>
              </div>
            </div>
            <div class="col m-4 _newSelectListWrap">
              <div class="_animateSelectBox">
                <span class="_selectTitle">Country</span>
                <div class="_newSelectListWrap">
                  <a class="address current-selected" id="country" name="country" data-id>Select</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <div class="col m-8 m-offset-3 l-offset-2 inputBox">
          <div class="row">
            <div class="col m-4">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="phone" required value>
                <label class="_animate">Phone</label>
              </div>
            </div>
            <div class="col m-4">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="address_fax" required value>
                <label class="_animate">Fax</label>
              </div>
            </div>
            <div class="col m-4">
              <div class="_animateInputBox">
                <input type="text" class="_animate editable" id="website" required value>
                <label class="_animate">Website</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="_formGroup _primaryContactWrap">
        <div class="col m-3 l-2 hide-xs">
          <label>Primary Contact</label>
        </div>
        <div class="col m-3 inputBox _primaryListWrap">
          <div class="_animateSelectBox">
            <span class="_selectTitle">Contact</span>
            <div class="_newSelectListWrap">
              <a class="address current-selected" id="contact" data-id>Select contact</a>
            </div>
          </div>
          <p id="email" class></p>
        </div>
        <div class="col m-4">
          <p class="_text-muted">Email will be sent from your organization email address</p>
        </div>
        <h4 class="col m-8 m-offset-3 l-offset-2">Configure Email Policy</h4>
        <div class="col m-8 m-offset-3 l-offset-2">
          <div class="row">
            <div class="_configureEmailPolicy canReadAndWrite">
              <div class="col s-12 m-6 l-6">
                <div class="_circleRadioRadianceWrap">
                  <label for="defaultEmailEnable" class="_forRadio">
                    Send messages using
                    <b>'easyerp no-replay@easyerp.com'</b>
                  </label>
                  <input
                    id="defaultEmailEnable"
                    name="choosedType"
                    maxlength="4"
                    type="radio"
                    class="_circleRadioRadiance onlyNumber"
                    checked
                  >
                  <label for="defaultEmailEnable" class="_circleRadioRadianceLabel"></label>
                </div>
              </div>
              <div class="col s-12 m-6 l-6">
                <div class="_circleRadioRadianceWrap">
                  <label
                    for="defaultEmailDisable"
                    class="_forRadio"
                  >Send messages using organization email addresses</label>
                  <input
                    id="defaultEmailDisable"
                    name="choosedType"
                    maxlength="4"
                    type="radio"
                    class="_circleRadioRadiance onlyNumber"
                  >
                  <label for="defaultEmailDisable" class="_circleRadioRadianceLabel"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="_formGroup _primaryContactWrap">
        <div class="col m-3 l-2 hide-xs">
          <label>Contact Name</label>
        </div>
        <div class="col m-8 inputBox">
          <div class="_animateInputBox">
            <input type="text" class="_animate editable" id="contactName" required value>
            <label class="_animate">Name</label>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <h4>Regional Settings</h4>
        <div class="col m-3 l-2 hide-xs">
          <label>Base Currency
            <div class="_smallText">(Currency used for accounting)</div>
          </label>
        </div>
        <div class="col m-4 inputBox _newSelectListWrap">
          <div class="_animateSelectBox _withInfo">
            <span class="_selectTitle">Currency</span>
            <div class="_newSelectListWrap">
              <a
                id="currency"
                data-id="USD"
                data-value="USD"
                class="current-selected"
                href="javascript:;"
              >USD</a>
            </div>
            <span class="tips icon-info" data-id="currency"></span>
          </div>
        </div>
      </div>
      <div class="_formGroup">
        <div class="col m-3 l-2 hide-xs">
          <label>Start Date
            <div
              class="_smallText"
            >(You can set start date only 1 time and this value cannot be changed)</div>
          </label>
        </div>
        <div class="col m-4 inputBox">
          <div class="_animateInputBox _withInfo">
            <span class="_staticLabel">Date</span>
            <input
              class="_animate extrainfo"
              type="text"
              name="startDate"
              placeholder="Start Date"
              id="startDate"
              value="20 Jan, 2019"
              readonly
            >
            <span class="tips icon-info" data-id="startDate"></span>
          </div>
        </div>
      </div>
      <div class="cropImages form" style="display:none;">
        <div class="formTitle">
          <h3 class="left">Crop Images</h3>
          <div class="clearfix"></div>
        </div>
        <br>
        <div class="image_input" style="float: left;margin-right: 20px;"></div>
        <img class="image_output">
        <div class="clearfix"></div>
      </div>
    </form>
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
._orgSettingsWrap {
  padding: 15px;
  padding-top: 20px;
  border-top: 1px solid #ededed;
}
.form-holder .form {
  min-height: 100px;
}
._orgSettingsWrap ._orgSettings {
  margin: 0;
  max-width: 1000px;
}
._orgSettingsWrap ._orgSettings ._formGroup {
  margin: 0 0px 15px 0px;
  display: table;
  width: 100%;
  color: #333;
}
._orgSettingsWrap ._orgSettings ._formGroup > label:not(._formLabel),
._orgSettingsWrap ._orgSettings ._formGroup > div {
  float: left;
}
@media (min-width: 992px) .l-2 {
  width: 16.66667%;
}
@media (min-width: 768px) .m-3 {
  width: 25%;
}
@media (min-width: 768px) .m-8 {
  width: 66.66667%;
}
._orgSettings ._formGroup > div {
  float: left;
}
.form .avatar {
  border: 1px solid #7eadcc;
  width: 140px;
  height: 140px;
  overflow: hidden;
}
.ui-dialog .avatar,
.form .avatar {
  float: left;
  position: relative;
}
.avatar {
  position: relative;
  display: inline-block;
}
.avatar .upload {
  overflow: hidden;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  display: block;
  position: absolute;
  height: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}
.avatar .upload input {
  position: absolute;
  top: 0;
  height: 20px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
  width: 100%;
  left: 0;
  cursor: pointer;
  z-index: 1;
  padding-left: 100% !important;
}
._orgSettingsWrap ._orgSettings #avatar {
  margin-bottom: -1px;
}
._orgSettingsWrap ._orgSettings ._formGroup {
  margin: 0 0px 15px 0px;
  display: table;
  width: 100%;
  color: #333;
}
._tipsWrap,
._categoryHolder._withInfo,
._animateSelectBox._withInfo,
._variantsBlock._withInfo,
._animateInputBox._withInfo {
  position: relative;
  padding-right: 26px;
}
input._animate,
textarea._animate {
  display: block;
  padding: 5px 10px 5px 0;
  border: none;
  color: #666682;
  border-bottom: 1px solid #c8c8d3;
  box-shadow: 0 1px 0 0 transparent;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
  font-size: 0.8125rem;
}
label._animate {
  position: absolute;
  top: 0;
  left: 0;
  color: #999;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-size: 12px;
  font-size: 0.75rem;
}
[class^="icon-"],
[class*=" icon-"] {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

/*
getForDd
{"data":[{"_id":"USD","decPlace":2,"symbol":"$","name":"USD"},{"_id":"EUR","decPlace":2,"symbol":"€","name":"EUR"}]}

forDd
{"data":[{"_id":"52203e707d4dba8813000003","profile":{"_id":1387275598000,"__v":0,"attachments":[],"profileAccess":[{"module":1,"_id":"52b0254ead08de381e000002","access":{"del":true,"editWrite":true,"read":true}},{"module":6,"_id":"52b0254ead08de381e000004","access":{"del":true,"editWrite":true,"read":true}},{"module":7,"_id":"52b0254ead08de381e000005","access":{"del":true,"editWrite":true,"read":true}},{"module":14,"_id":"52b0254ead08de381e000007","access":{"del":true,"editWrite":true,"read":true}},{"module":15,"_id":"52b0254ead08de381e000008","access":{"del":true,"editWrite":true,"read":true}},{"module":19,"_id":"52b0254ead08de381e000009","access":{"del":true,"editWrite":true,"read":true}},{"module":24,"_id":"52b0254ead08de381e00000c","access":{"del":true,"editWrite":true,"read":true}},{"module":25,"_id":"52b0254ead08de381e00000d","access":{"del":true,"editWrite":true,"read":true}},{"module":36,"_id":"52b0254ead08de381e000010","access":{"del":true,"editWrite":true,"read":true}},{"module":39,"_id":"52b0254ead08de381e000011","access":{"del":true,"editWrite":true,"read":true}},{"module":40,"_id":"52b0254ead08de381e000012","access":{"del":true,"editWrite":true,"read":true}},{"module":42,"_id":"52b0254ead08de381e000013","access":{"del":true,"editWrite":true,"read":true}},{"module":43,"_id":"52b0254ead08de381e000014","access":{"del":true,"editWrite":true,"read":true}},{"module":44,"_id":"52b0254ead08de381e000015","access":{"del":true,"editWrite":true,"read":true}},{"module":49,"_id":"52b0254ead08de381e000016","access":{"del":true,"editWrite":true,"read":true}},{"module":50,"_id":"52b0254ead08de381e000017","access":{"del":true,"editWrite":true,"read":true}},{"module":51,"_id":"52b0254ead08de381e000018","access":{"del":true,"editWrite":true,"read":true}},{"module":52,"_id":"52b0254ead08de381e000019","access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ed","module":29,"access":{"del":true,"editWrite":true,"read":true}},{"module":53,"_id":"52ef6d5f9d8a19c819e19f7f","access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ec","module":54,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6eb","module":57,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ea","module":56,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e9","module":55,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e8","module":58,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e7","module":59,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e6","module":61,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e5","module":60,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e4","module":62,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e3","module":63,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e2","module":64,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e1","module":65,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6e0","module":73,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6df","module":71,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6de","module":72,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6dd","module":68,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6dc","module":67,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6db","module":65,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6da","module":75,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d9","module":69,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d8","module":66,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d7","module":70,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d6","module":74,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d5","module":9,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d4","module":76,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d3","module":77,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d2","module":80,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d1","module":78,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6d0","module":79,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6cf","module":80,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ce","module":82,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6cd","module":83,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6cc","module":84,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6cb","module":85,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ca","module":86,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c9","module":87,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c8","module":88,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c7","module":95,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c6","module":92,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c5","module":93,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c4","module":94,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c3","module":91,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c2","module":89,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c1","module":99,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6c0","module":96,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6bf","module":100,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6be","module":98,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6bd","module":97,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6bc","module":101,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6bb","module":102,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ba","module":103,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b9","module":104,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b8","module":105,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b7","module":106,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b6","module":107,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b5","module":109,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b4","module":110,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b3","module":117,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b2","module":112,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b1","module":119,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6b0","module":114,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6af","module":115,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ae","module":116,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ad","module":119,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ac","module":121,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6ab","module":121,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6aa","module":143,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a9","module":142,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a8","module":124,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a7","module":133,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a6","module":122,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a5","module":128,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a4","module":123,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a3","module":147,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a2","module":130,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a1","module":129,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca6a0","module":125,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca69f","module":140,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca69e","module":131,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca69d","module":127,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca69c","module":137,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca69b","module":126,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca69a","module":141,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca699","module":145,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca698","module":136,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca697","module":135,"access":{"del":true,"editWrite":true,"read":true}},{"_id":"589875b4788414bc44fca696","module":132,"access":{"del":true,"editWrite":true,"read":true}},{"module":143,"access":{"del":true,"editWrite":true,"read":true}},{"module":144,"access":{"del":true,"editWrite":true,"read":true}},{"module":149,"access":{"del":true,"editWrite":true,"read":true}},{"module":133,"access":{"del":true,"editWrite":true,"read":true}},{"module":153,"access":{"del":true,"editWrite":true,"read":true}},{"module":150,"access":{"del":true,"editWrite":true,"read":true}},{"module":152,"access":{"del":true,"editWrite":true,"read":true}},{"module":154,"access":{"del":true,"editWrite":true,"read":true}},{"module":164,"access":{"del":true,"editWrite":true,"read":true}},{"module":160,"access":{"del":true,"editWrite":true,"read":true}},{"module":165,"access":{"del":true,"editWrite":true,"read":true}},{"module":161,"access":{"del":true,"editWrite":true,"read":true}},{"module":162,"access":{"del":true,"editWrite":true,"read":true}},{"module":161,"access":{"del":true,"editWrite":true,"read":true}},{"module":162,"access":{"del":true,"editWrite":true,"read":true}},{"module":164,"access":{"del":true,"editWrite":true,"read":true}},{"module":165,"access":{"del":true,"editWrite":true,"read":true}},{"module":161,"access":{"del":true,"editWrite":true,"read":true}},{"module":162,"access":{"del":true,"editWrite":true,"read":true}},{"module":164,"access":{"del":true,"editWrite":true,"read":true}},{"module":165,"access":{"del":true,"editWrite":true,"read":true}},{"module":151,"access":{"del":true,"editWrite":true,"read":true}}],"profileDescription":"No description","profileName":"admin"},"email":"info@thinkmobiles.com","login":"superAdmin"}]}
industry
{"data":[{"_id":"574c54e22b7598157b94f10d","name":"Accounting","__v":0},{"_id":"574c54e22b7598157b94f111","name":"Animation","__v":0},{"_id":"574c54e22b7598157b94f10f","name":"Alternative Dispute Resolution","__v":0},{"_id":"574c54e22b7598157b94f110","name":"Alternative Medicine","__v":0},{"_id":"574c54e22b7598157b94f112","name":"Apparel/Fashion","__v":0},{"_id":"574c54e22b7598157b94f114","name":"Arts/Crafts","__v":0},{"_id":"574c54e22b7598157b94f10e","name":"Airlines/Aviation","__v":0},{"_id":"574c54e22b7598157b94f117","name":"Banking/Mortgage","__v":0},{"_id":"574c54e22b7598157b94f119","name":"Broadcast Media","__v":0},{"_id":"574c54e22b7598157b94f116","name":"Aviation/Aerospace","__v":0},{"_id":"574c54e22b7598157b94f11c","name":"Capital Markets/Hedge Fund/Private Equity","__v":0},{"_id":"574c54e22b7598157b94f11b","name":"Business Supplies/Equipment","__v":0},{"_id":"574c54e22b7598157b94f11e","name":"Civic/Social Organization","__v":0},{"_id":"574c54e22b7598157b94f120","name":"Commercial Real Estate","__v":0},{"_id":"574c54e22b7598157b94f121","name":"Computer Games","__v":0},{"_id":"574c54e22b7598157b94f115","name":"Automotive","__v":0},{"_id":"574c54e22b7598157b94f113","name":"Architecture/Planning","__v":0},{"_id":"574c54e22b7598157b94f123","name":"Computer Networking","__v":0},{"_id":"574c54e22b7598157b94f125","name":"Computer/Network Security","__v":0},{"_id":"574c54e22b7598157b94f126","name":"Construction","__v":0},{"_id":"574c54e22b7598157b94f118","name":"Biotechnology/Greentech","__v":0},{"_id":"574c54e22b7598157b94f11a","name":"Building Materials","__v":0},{"_id":"574c54e22b7598157b94f128","name":"Consumer Goods","__v":0},{"_id":"574c54e22b7598157b94f12a","name":"Cosmetics","__v":0},{"_id":"574c54e22b7598157b94f12b","name":"Dairy","__v":0},{"_id":"574c54e22b7598157b94f12d","name":"Design","__v":0},{"_id":"574c54e22b7598157b94f11d","name":"Chemicals","__v":0},{"_id":"574c54e22b7598157b94f11f","name":"Civil Engineering","__v":0},{"_id":"574c54e22b7598157b94f12f","name":"Education Management","__v":0},{"_id":"574c54e22b7598157b94f130","name":"Electrical/Electronic Manufacturing","__v":0},{"_id":"574c54e22b7598157b94f132","name":"Environmental Services","__v":0},{"_id":"574c54e22b7598157b94f134","name":"Executive Office","__v":0},{"_id":"574c54e22b7598157b94f124","name":"Computer Software/Engineering","__v":0},{"_id":"574c54e22b7598157b94f122","name":"Computer Hardware","__v":0},{"_id":"574c54e22b7598157b94f139","name":"Fishery","__v":0},{"_id":"574c54e22b7598157b94f135","name":"Facilities Services","__v":0},{"_id":"574c54e22b7598157b94f137","name":"Financial Services","__v":0},{"_id":"574c54e22b7598157b94f127","name":"Consumer Electronics","__v":0},{"_id":"574c54e22b7598157b94f129","name":"Consumer Services","__v":0},{"_id":"574c54e22b7598157b94f13e","name":"Gambling/Casinos","__v":0},{"_id":"574c54e22b7598157b94f13a","name":"Food Production","__v":0},{"_id":"574c54e22b7598157b94f13c","name":"Fundraising","__v":0},{"_id":"574c54e22b7598157b94f143","name":"Health/Fitness","__v":0},{"_id":"574c54e22b7598157b94f12c","name":"Defense/Space","__v":0},{"_id":"574c54e22b7598157b94f12e","name":"E-Learning","__v":0},{"_id":"574c54e22b7598157b94f148","name":"Import/Export","__v":0},{"_id":"574c54e22b7598157b94f13f","name":"Glass/Ceramics/Concrete","__v":0},{"_id":"574c54e22b7598157b94f141","name":"Government Relations","__v":0},{"_id":"574c54e22b7598157b94f133","name":"Events Services","__v":0},{"_id":"574c54e22b7598157b94f131","name":"Entertainment/Movie Production","__v":0},{"_id":"574c54e22b7598157b94f14d","name":"Insurance","__v":0},{"_id":"574c54e22b7598157b94f146","name":"Hospitality","__v":0},{"_id":"574c54e22b7598157b94f144","name":"Higher Education/Acadamia","__v":0},{"_id":"574c54e22b7598157b94f152","name":"Investment Management/Hedge Fund/Private Equity","__v":0},{"_id":"574c54e22b7598157b94f138","name":"Fine Art","__v":0},{"_id":"574c54e22b7598157b94f136","name":"Farming","__v":0},{"_id":"574c54e22b7598157b94f157","name":"Legislative Office","__v":0},{"_id":"574c54e22b7598157b94f149","name":"Individual/Family Services","__v":0},{"_id":"574c54e22b7598157b94f14b","name":"Information Services","__v":0},{"_id":"574c54e22b7598157b94f13b","name":"Food/Beverages","__v":0},{"_id":"574c54e22b7598157b94f13d","name":"Furniture","__v":0},{"_id":"574c54e22b7598157b94f15c","name":"Machinery","__v":0},{"_id":"574c54e22b7598157b94f14e","name":"International Affairs","__v":0},{"_id":"574c54e22b7598157b94f150","name":"Internet","__v":0},{"_id":"574c54e22b7598157b94f161","name":"Mechanical or Industrial Engineering","__v":0},{"_id":"574c54e22b7598157b94f142","name":"Graphic Design/Web Design","__v":0},{"_id":"574c54e22b7598157b94f140","name":"Government Administration","__v":0},{"_id":"574c54e22b7598157b94f166","name":"Military Industry","__v":0},{"_id":"574c54e22b7598157b94f153","name":"Judiciary","__v":0},{"_id":"574c54e22b7598157b94f155","name":"Law Practice/Law Firms","__v":0},{"_id":"574c54e22b7598157b94f145","name":"Hospital/Health Care","__v":0},{"_id":"574c54e22b7598157b94f147","name":"Human Resources/HR","__v":0},{"_id":"574c54e22b7598157b94f16b","name":"Nanotechnology","__v":0},{"_id":"574c54e22b7598157b94f15a","name":"Logistics/Procurement","__v":0},{"_id":"574c54e22b7598157b94f158","name":"Leisure/Travel","__v":0},{"_id":"574c54e22b7598157b94f170","name":"Other Industry","__v":0},{"_id":"574c54e22b7598157b94f14c","name":"Information Technology/IT","__v":0},{"_id":"574c54e22b7598157b94f14a","name":"Industrial Automation","__v":0},{"_id":"574c54e22b7598157b94f175","name":"Performing Arts","__v":0},{"_id":"574c54e22b7598157b94f15f","name":"Market Research","__v":0},{"_id":"574c54e22b7598157b94f15d","name":"Management Consulting","__v":0},{"_id":"574c54e22b7598157b94f14f","name":"International Trade/Development","__v":0},{"_id":"574c54e22b7598157b94f151","name":"Investment Banking/Venture","__v":0},{"_id":"574c54e22b7598157b94f17a","name":"Political Organization","__v":0},{"_id":"574c54e22b7598157b94f164","name":"Medical Practice","__v":0},{"_id":"574c54e22b7598157b94f162","name":"Media Production","__v":0},{"_id":"574c54e22b7598157b94f17f","name":"Public Relations/PR","__v":0},{"_id":"574c54e22b7598157b94f154","name":"Law Enforcement","__v":0},{"_id":"574c54e22b7598157b94f156","name":"Legal Services","__v":0},{"_id":"574c54e22b7598157b94f184","name":"Real Estate/Mortgage","__v":0},{"_id":"574c54e22b7598157b94f169","name":"Museums/Institutions","__v":0},{"_id":"574c54e22b7598157b94f167","name":"Mining/Metals","__v":0},{"_id":"574c54e22b7598157b94f15b","name":"Luxury Goods/Jewelry","__v":0},{"_id":"574c54e22b7598157b94f159","name":"Library","__v":0},{"_id":"574c54e22b7598157b94f189","name":"Restaurants","__v":0},{"_id":"574c54e22b7598157b94f16e","name":"Oil/Energy/Solar/Greentech","__v":0},{"_id":"574c54e22b7598157b94f16c","name":"Newspapers/Journalism","__v":0},{"_id":"574c54e22b7598157b94f18e","name":"Sporting Goods","__v":0},{"_id":"574c54e22b7598157b94f160","name":"Marketing/Advertising/Sales","__v":0},{"_id":"574c54e22b7598157b94f15e","name":"Maritime","__v":0},{"_id":"574c54e22b7598157b94f193","name":"Textiles","__v":0},{"_id":"574c54e22b7598157b94f171","name":"Outsourcing/Offshoring","__v":0},{"_id":"574c54e22b7598157b94f173","name":"Packaging/Containers","__v":0},{"_id":"574c54e22b7598157b94f198","name":"Utilities","__v":0},{"_id":"574c54e22b7598157b94f165","name":"Mental Health Care","__v":0},{"_id":"574c54e22b7598157b94f163","name":"Medical Equipment","__v":0},{"_id":"574c54e22b7598157b94f176","name":"Pharmaceuticals","__v":0},{"_id":"574c54e22b7598157b94f178","name":"Photography","__v":0},{"_id":"574c54e22b7598157b94f19d","name":"Wine/Spirits","__v":0},{"_id":"574c54e22b7598157b94f16a","name":"Music","__v":0},{"_id":"574c54e22b7598157b94f168","name":"Motion Pictures/Film","__v":0},{"_id":"574c54e22b7598157b94f1a2","name":"E-learning ","__v":0},{"_id":"574c54e22b7598157b94f17b","name":"Primary/Secondary Education","__v":0},{"_id":"574c54e22b7598157b94f17d","name":"Professional Training","__v":0},{"_id":"574c54e22b7598157b94f16f","name":"Online Publishing","__v":0},{"_id":"574c54e22b7598157b94f16d","name":"Non-Profit/Volunteering","__v":0},{"_id":"574c54e22b7598157b94f1a7","name":"Content","__v":0},{"_id":"574c54e22b7598157b94f180","name":"Public Safety","__v":0},{"_id":"574c54e22b7598157b94f182","name":"Railroad Manufacture","__v":0},{"_id":"574c54e22b7598157b94f174","name":"Paper/Forest Products","__v":0},{"_id":"574c54e22b7598157b94f172","name":"Package/Freight Delivery","__v":0},{"_id":"574c54e22b7598157b94f187","name":"Renewables/Environment","__v":0},{"_id":"574c54e22b7598157b94f185","name":"Recreational Facilities/Services","__v":0},{"_id":"574c54e22b7598157b94f177","name":"Philanthropy","__v":0},{"_id":"574c54e22b7598157b94f179","name":"Plastics","__v":0},{"_id":"574c54e22b7598157b94f18a","name":"Retail Industry","__v":0},{"_id":"574c54e22b7598157b94f18c","name":"Semiconductors","__v":0},{"_id":"574c54e22b7598157b94f17e","name":"Program Development","__v":0},{"_id":"574c54e22b7598157b94f17c","name":"Printing","__v":0},{"_id":"574c54e22b7598157b94f191","name":"Supermarkets","__v":0},{"_id":"574c54e22b7598157b94f18f","name":"Sports","__v":0},{"_id":"574c54e22b7598157b94f181","name":"Publishing Industry","__v":0},{"_id":"574c54e22b7598157b94f183","name":"Ranching","__v":0},{"_id":"574c54e22b7598157b94f196","name":"Translation/Localization","__v":0},{"_id":"574c54e22b7598157b94f194","name":"Think Tanks","__v":0},{"_id":"574c54e22b7598157b94f186","name":"Religious Institutions","__v":0},{"_id":"574c54e22b7598157b94f188","name":"Research Industry","__v":0},{"_id":"574c54e22b7598157b94f19b","name":"Warehousing","__v":0},{"_id":"574c54e22b7598157b94f199","name":"Venture Capital/VC","__v":0},{"_id":"574c54e22b7598157b94f18b","name":"Security/Investigations","__v":0},{"_id":"574c54e22b7598157b94f18d","name":"Shipbuilding","__v":0},{"_id":"574c54e22b7598157b94f1a0","name":"IoT","__v":0},{"_id":"574c54e22b7598157b94f19e","name":"Wireless","__v":0},{"_id":"574c54e22b7598157b94f192","name":"Telecommunications","__v":0},{"_id":"574c54e22b7598157b94f190","name":"Staffing/Recruiting","__v":0},{"_id":"574c54e22b7598157b94f1a5","name":"Startup/MVP","__v":0},{"_id":"574c54e22b7598157b94f1a3","name":"Games","__v":0},{"_id":"574c54e22b7598157b94f195","name":"Tobacco","__v":0},{"_id":"574c54e22b7598157b94f197","name":"Transportation","__v":0},{"_id":"574c54e22b7598157b94f1a8","name":"Social","__v":0},{"_id":"574c54e22b7598157b94f19c","name":"Wholesale","__v":0},{"_id":"574c54e22b7598157b94f19a","name":"Veterinary","__v":0},{"_id":"574c54e22b7598157b94f1a1","name":"Healthcare ","__v":0},{"_id":"574c54e22b7598157b94f19f","name":"E-commerce","__v":0},{"_id":"574c54e22b7598157b94f1a4","name":"Corporate","__v":0},{"_id":"574c54e22b7598157b94f1a6","name":"Financial ","__v":0},{"_id":"574c54e22b7598157b94f1a9","name":"Tech","__v":0}]}

*/
