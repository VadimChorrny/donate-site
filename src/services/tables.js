import { AlertService } from "./alertService.js";
import { authErrors } from "../constants/messages/authMessages";
import tableService from "../api/tables";
import { UserService } from "../services/userService.js";

export function createTable(history, values) {
    var model = {
        name: values.name,
        describe: values.describe,
        image: values.image,
        price: values.price,
        isActive: true,
        authorId: UserService.getCurrentUserId(),
    };

    console.log('My model in service: ', model)

    tableService
        .createTable(model)
        .then(
            () => {
                AlertService.successMessage(authErrors.REGISTRATION_SUCCESS);
                history.push("/main");
            },
            (err) => {
                err.response.status === 400
                    ? AlertService.errorMessage(err)
                    : AlertService.errorMessage(err);
            }
        )
        .catch(() => {
            AlertService.errorMessage(
                authErrors.REGISTRATION_FAILED,
                authErrors.SOMETHING_WENT_WRONG
            );
        });
}

export function getTable() {
    let id = UserService.getCurrentUserId();
    tableService.getTableById(32).then(
        (response) => {
            return response.data;
        },
        () => {
            AlertService.errorMessage(
                authErrors.SOMETHING_WENT_WRONG,
                authErrors.SOMETHING_WENT_WRONG
            );
        }
    );
}
