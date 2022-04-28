import { AlertService } from "./alertService.js";
import { authErrors, tables_success } from "../constants/messages/authMessages";
import tableService from "../api/tables";

export function createTable(history, values) {
    let model = {
        name: values.name,
        goal: values.goal,
        image: values.image,
        describe: values.describe,
    };

    tableService
        .createTable(model)
        .then(
            () => {
                AlertService.successMessage(tables_success.TABLE_CREATED);
                history.push("/main");
            },
            (err) => {
                console.log(err);
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
