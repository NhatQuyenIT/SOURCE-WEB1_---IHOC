function showData(data) {
  const format = new Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  let html = "";
  data.forEach((test) => {
    let htmlTestState = ``;
    const open = new Date(test.thoigianbatdau);
    const close = new Date(test.thoigianketthuc);
    const state = {};
    if (test.diemthi) {
      state.color = "primary";
      state.text = `${+test.diemthi} điểm`;
    } else {
      const now = Date.now();
      if (now < +open) {
        state.color = "secondary";
        state.text = "Chưa mở";
      } else if (now >= +open && now <= +close) {
        state.color = "success";
        state.text = "Chưa làm";
      } else {
        state.color = "danger";
        state.text = "Quá hạn";
      }
    }
    htmlTestState += `<button class="btn btn-alt-${state.color} rounded-pill px-3 me-1 my-1" disabled>${state.text}</button>`;
    html += `
    <div class="block block-rounded block-fx-pop mb-2">
        <div class="block-content block-content-full border-start border-3 border-${
          state.color
        }">
            <div class="d-md-flex justify-content-md-between align-items-md-center">
                <div class="p-1 p-md-3">
                    <h3 class="h4 fw-bold mb-3">
                        <a href="./test/start/${
                          test.made
                        }" class="text-dark link-fx">${test.tende}</a>
                    </h3>
                    <p class="fs-sm text-muted mb-2">
                        <i class="fa fa-layer-group me-1"></i></i> <strong data-bs-toggle="tooltip" data-bs-animation="true" data-bs-placement="top" title="${
                          test.tennhom
                        }" style="cursor:pointer">${test.tenmonhoc} - NH${
      test.namhoc
    } - HK${test.hocky}</strong>
                    </p>
                    <p class="fs-sm text-muted mb-0">
                        <i class="fa fa-clock me-1"></i> Diễn ra từ <span>${format.format(
                          open
                        )}</span> đến <span>${format.format(close)}</span>
                    </p>
                </div>
                <div class="p-1 p-md-3">
                ${htmlTestState}
                    <a class="btn btn-alt-info rounded-pill px-3 me-1 my-1" href="./test/start/${
                      test.made
                    }">Xem chi tiết</a>
                </div>
            </div>
        </div>
    </div>`;
  });
  $(".list-test").html(html);
  $('[data-bs-toggle="tooltip"]').tooltip();
}

// Get current user ID
const container = document.querySelector(".content");
const currentUser = container.dataset.id;
delete container.dataset.id;

$(document).ready(function () {
  
});

(function () {
  // Pagination
  defaultPaginationOptions.controller = "client";
  defaultPaginationOptions.model = "DeThiModel";
  defaultPaginationOptions.manguoidung = currentUser;
  getPagination(currentPaginationOptions, valuePage.curPage);
})();
