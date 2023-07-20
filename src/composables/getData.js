import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
    const data = ref(null);
    const loading = ref(true);
    const errorMsg = ref(null);

    const getData = async (url) => {
        loading.value = true;
        errorMsg.value = null;
        try {
            const res = await axios.get(url);
            data.value = res.data;
            console.log(data.value);
        } catch (error) {
            console.log(error);
            errorMsg.value = `${error.response.status} - ${error.response.data}`;
        } finally {
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading,
        errorMsg,
    }
}