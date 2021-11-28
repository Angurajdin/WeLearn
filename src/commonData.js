import { reactive, ref } from "vue";

const userData = reactive({
    id: null,
    userName: null,
    password: null,
    mobileNo: null,
    emailID: null
});

export default { userData }