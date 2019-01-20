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
export default {};
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

{"data":[{"_id":"USD","decPlace":2,"symbol":"$","name":"USD"},{"_id":"EUR","decPlace":2,"symbol":"€","name":"EUR"}]}
