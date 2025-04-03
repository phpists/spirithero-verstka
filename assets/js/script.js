const handleCheckSearchInputs = () => {
  const search = document.querySelector(".page-header-search");
  const input = search?.querySelector("input");
  const clearBtn = search?.querySelector(".clear");

  input?.addEventListener("input", (e) => {
    search.classList.toggle("active", e.target.value.length > 0);
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    search.classList.remove("active");
  });
};

const handleToggleOrderHistory = () => {
  const wrapper = document.querySelector(".order-page-history");
  const header = document.querySelector(".order-page-history-header button");

  header?.addEventListener("click", () => wrapper.classList.toggle("active"));
};

const handleToggleCatalogFilterCard = () => {
  const cards = document.querySelectorAll(".catalog-page-sidebar-card");

  cards.forEach((card) => {
    const btn = card.querySelector(".catalog-page-sidebar-card-header button");
    btn?.addEventListener("click", () => card.classList.toggle("active"));
  });
};

const handleToggleModals = () => {
  const buttons = document.querySelectorAll("[data-modal-btn]");
  buttons.forEach((btn) => {
    const modalClassName = btn.getAttribute("data-modal-btn");
    const modal = document.querySelector(`.${modalClassName}`);
    const closeBtn = document.querySelector(`.${modalClassName} .modal-close`);

    btn?.addEventListener("click", () => {
      modal.classList.add("active");
    });

    closeBtn?.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });
};

const handleToggleCheckbox = () => {
  const checkboxes = document.querySelectorAll(".checkbox-input");

  checkboxes.forEach((checkbox) => {
    const input = checkbox.querySelector("input");
    input?.addEventListener("input", (e) =>
      checkbox.classList.toggle("active", e.target.checked)
    );
  });
};

const handleToggleSidebar = () => {
  const btn = document.querySelector(".sidebar-burger");
  const btnIcon = btn.querySelector("img");
  const sidebar = document.querySelector(".sidebar");
  const body = document.querySelector("body");
  btn.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("open");
    sidebar.classList.toggle("open");
    body.style.overflow = isOpen ? "unset" : "hidden";
    btnIcon.src = isOpen
      ? "./assets/img/burger.svg"
      : "./assets/img/burger-close.svg";
  });
};

const handleToggleToggles = () => {
  const toggles = document.querySelectorAll(".toggle-wrapper");

  toggles.forEach((toggle) => {
    const checkbox = toggle.querySelector("input");
    checkbox.addEventListener("input", (e) =>
      toggle.classList.toggle("active", e.target.checked)
    );
  });
};

const handleAddPhoneMask = () => {
  const input = document.querySelector("#phoneInput");
  if (input) {
    const maskOptions = {
      mask: "+{38}(000)000-0000",
    };
    const mask = IMask(input, maskOptions);
  }
};

const handleToggleFormTags = () => {
  const tags = document.querySelectorAll(".form-tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const checkbox = tag.querySelector("input");
      const prevValue = checkbox.checked;
      tag.classList.toggle("active", !prevValue);
      checkbox.checked = !prevValue;
    });
  });
};

const handleChangeCounter = () => {
  const counter = document.querySelector(".counter");
  if (counter) {
    const input = counter.querySelector("input");
    const [remove, add] = counter.querySelectorAll("button");

    add.addEventListener("click", () => {
      const inputValue = Number(input.value);
      input.value = inputValue + 1;
    });

    remove.addEventListener("click", () => {
      const inputValue = Number(input.value);
      console.log(inputValue);
      if (inputValue <= 0) {
        input.value = 0;
      } else {
        input.value = inputValue - 1;
      }
    });
  }
};

const handleTogglePayoutsTabs = () => {
  const tabs = document.querySelectorAll(".payout-page-statuses");
};

const handleToggleFieldsType = (optionsClassName, fieldsClassName) => {
  const options = document.querySelectorAll(optionsClassName);
  const fields = document.querySelectorAll(fieldsClassName);
  console.log(options);
  options.forEach((opt) => {
    opt.addEventListener("input", function (e) {
      console.log(this.value);
      fields.forEach((f) => {
        const selected = f.classList.contains(e.target.value);
        f.style.display = selected ? "flex" : "none";
      });
    });
  });
};

const handleTogglStoreColors = () => {
  const cards = document.querySelectorAll(".store-form-color-card");

  cards.forEach((card) => {
    const button = card.querySelector(".store-form-color-card-toggle-btn");
    button.addEventListener("click", () => {
      const isActive = card.classList.contains("active");

      button.innerHTML = isActive ? "+" : "-";

      card.classList.toggle("active");
    });
  });
};

const handleToggleSidebarSize = () => {
  const sidebar = document.querySelector(".sidebar");
  const button = document.querySelector(".sidebar-toggler");
  const closeButton = document.querySelector(".sidebar-logo-toggler");

  button.addEventListener("click", () => {
    sidebar.classList.toggle("toggled");
    button.classList.toggle("active");
  });

  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("toggled");
    button.classList.remove("active");
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  handleCheckSearchInputs();
  handleToggleOrderHistory();
  handleToggleCatalogFilterCard();
  handleToggleModals();
  handleToggleCheckbox();
  handleToggleSidebar();
  handleToggleToggles();
  handleAddPhoneMask();
  handleToggleFormTags();
  handleChangeCounter();
  handleToggleFieldsType(
    "input[name='create_type']",
    ".store-form .form-block-create-type-fields"
  );
  handleToggleFieldsType(
    "select[name='store_type']",
    ".store-form .form-block-types-fields"
  );
  handleTogglStoreColors();
  handleToggleSidebarSize();
});
