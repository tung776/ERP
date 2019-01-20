export const actions = {

    setOrganizationSetting({
        commit
    }, OrganizationSetting) {
        commit("SET_ORGANIZATION_SETTING", OrganizationSetting);

    },
}

export const state = () => ({
    organizationSetting: null
});

export const mutations = {

    SET_ORGANIZATION_SETTING(state, OrganizationSetting) {
        state.organizationSetting = OrganizationSetting;
    }
}

export const getters = {
    organizationSetting(state) {
        return state.organizationSetting;
    }
};