import swal from "sweetalert2";

export function useFlash() {

    function flash(title, message, level = 'success') {
        return new swal(title, message, level);
    }


    return { flash };

}