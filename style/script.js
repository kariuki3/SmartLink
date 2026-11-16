/*   SMARTLINK WEBSITE JAVASCRIPT
   Shared data and interactions for every website page. */

/* ---------------- Product catalogue data ---------------- */

/* SmartLink product catalogue. Prices are indicative sample prices in Kenyan shillings. */
window.SMARTLINK_PRODUCTS = [
  {
    "id": "network_toolkit",
    "name": "Networking Technician Toolkit",
    "category": "Installation Tools",
    "description": "A practical set of hand tools used by technicians for network installation, cable preparation and routine maintenance.",
    "price": 6500,
    "images": [
      "images/network_toolkit_1.webp",
      "images/network_toolkit_2.webp",
      "images/network_toolkit_3.webp",
      "images/network_toolkit_4.webp"
    ]
  },
  {
    "id": "digital_multimeter",
    "name": "Digital Multimeter",
    "category": "Testing Equipment",
    "description": "A handheld measuring instrument for checking electrical values such as voltage, current and resistance during installation and troubleshooting.",
    "price": 1800,
    "images": [
      "images/digital_multimeter_1.webp",
      "images/digital_multimeter_2.webp",
      "images/digital_multimeter_3.webp",
      "images/digital_multimeter_4.webp",
      "images/digital_multimeter_5.webp"
    ]
  },
  {
    "id": "cable_stripper",
    "name": "Cable Stripper",
    "category": "Cable Tools",
    "description": "A hand tool for removing the outer insulation from network cables while helping protect the inner conductors.",
    "price": 450,
    "images": [
      "images/cable_stripper_1.webp",
      "images/cable_stripper_2.webp"
    ]
  },
  {
    "id": "fiber_stripper",
    "name": "Fiber Optic Stripper",
    "category": "Fiber Tools",
    "description": "A specialist tool for removing protective coatings from optical fibre during preparation and termination.",
    "price": 500,
    "images": [
      "images/fiber_stripper_1.webp",
      "images/fiber_stripper_2.webp"
    ]
  },
  {
    "id": "wireless_access_point",
    "name": "Wireless Access Point",
    "category": "Wireless Networking",
    "description": "Provides Wi-Fi connectivity to compatible devices on a wired network. Suitable for extending wireless coverage in homes and offices.",
    "price": 7500,
    "images": [
      "images/wireless_access_point_1.webp"
    ]
  },
  {
    "id": "wifi_extender",
    "name": "Wi-Fi Range Extender",
    "category": "Wireless Networking",
    "description": "Helps extend an existing wireless network into areas where the Wi-Fi signal is weaker.",
    "price": 3000,
    "images": [
      "images/wifi_extender_1.webp"
    ]
  },
  {
    "id": "network_rack",
    "name": "Network Rack Cabinet",
    "category": "Network Infrastructure",
    "description": "A cabinet for mounting and organising switches, patch panels and other network equipment. Confirm rack size and depth before ordering.",
    "price": 9500,
    "images": [
      "images/network_rack_1.webp",
      "images/network_rack_2.webp",
      "images/network_rack_3.webp",
      "images/network_rack_4.webp"
    ]
  },
  {
    "id": "fiber_ont",
    "name": "Fiber Optic ONT",
    "category": "Fiber Equipment",
    "description": "An optical network terminal used at a customer premises to connect a fibre broadband service to a local network.",
    "price": 3500,
    "images": [
      "images/fiber_ont_1.webp",
      "images/fiber_ont_2.webp"
    ]
  },
  {
    "id": "fiber_optical_tester",
    "name": "Fiber Optic Tester",
    "category": "Fiber Testing",
    "description": "Testing equipment used to inspect or troubleshoot fibre-optic links. Confirm the exact test functions and model before purchase.",
    "price": 5500,
    "images": [
      "images/fiber_optical_tester_1.webp",
      "images/fiber_optical_tester_2.webp",
      "images/fiber_optical_tester_3.webp"
    ]
  },
  {
    "id": "fiber_fusion_splicer",
    "name": "Fiber Fusion Splicer",
    "category": "Fiber Tools",
    "description": "Equipment used to align and fuse optical fibres during fibre installation and repair. Price depends heavily on model and features.",
    "price": 85000,
    "images": [
      "images/fiber_fusion_splicer_1.webp",
      "images/fiber_fusion_splicer_2.webp",
      "images/fiber_fusion_splicer_3.webp",
      "images/fiber_fusion_splicer_4.webp"
    ]
  },
  {
    "id": "network_cable_tester",
    "name": "Network Cable Tester",
    "category": "Testing Equipment",
    "description": "Checks Ethernet cable wiring and continuity to help identify open circuits, shorts and incorrect connections.",
    "price": 900,
    "images": [
      "images/network_cable_tester_1.webp",
      "images/network_cable_tester_2.webp"
    ]
  },
  {
    "id": "fiber_cleaver",
    "name": "Fiber Optic Cleaver",
    "category": "Fiber Tools",
    "description": "A precision tool for making clean fibre cuts before splicing or connector preparation.",
    "price": 7500,
    "images": [
      "images/fiber_cleaver_1.webp"
    ]
  },
  {
    "id": "rj45_crimping_tool",
    "name": "RJ45 Crimping Tool",
    "category": "Cable Tools",
    "description": "A hand tool for attaching RJ45 connectors to compatible Ethernet cables during network termination.",
    "price": 1500,
    "images": [
      "images/rj45_crimping_tool_1.webp",
      "images/rj45_crimping_tool_2.webp",
      "images/rj45_crimping_tool_3.webp"
    ]
  },
  {
    "id": "fiber_media_converter",
    "name": "Fiber Media Converter",
    "category": "Fiber Equipment",
    "description": "Converts network signals between fibre-optic and copper Ethernet connections. Check speed and fibre compatibility before ordering.",
    "price": 2500,
    "images": [
      "images/fiber_media_converter_1.webp"
    ]
  },
  {
    "id": "patch_panel",
    "name": "Network Patch Panel",
    "category": "Network Infrastructure",
    "description": "Organises structured network cabling into a central panel for easier connection, labelling and maintenance.",
    "price": 4200,
    "images": [
      "images/patch_panel_1.webp",
      "images/patch_panel_2.webp",
      "images/patch_panel_3.webp"
    ]
  },
  {
    "id": "network_switch",
    "name": "Network Switch",
    "category": "Network Equipment",
    "description": "Connects multiple wired devices such as computers, printers, access points and servers within a local area network.",
    "price": 4200,
    "images": [
      "images/network_switch_1.webp",
      "images/network_switch_2.webp",
      "images/network_switch_3.webp",
      "images/network_switch_4.webp",
      "images/network_switch_5.webp",
      "images/network_switch_6.webp"
    ]
  },
  {
    "id": "fiber_optic_cable",
    "name": "Fiber Optic Cable",
    "category": "Fiber Cables",
    "description": "Carries data as light signals over optical fibre. Cable type, core count and length vary by installation requirement.",
    "price": 6500,
    "images": [
      "images/fiber_optic_cable_1.webp",
      "images/fiber_optic_cable_2.webp"
    ]
  },
  {
    "id": "rj45_connectors",
    "name": "RJ45 Connectors",
    "category": "Cable Accessories",
    "description": "Modular connectors used to terminate compatible Ethernet cables. The sample price is for a pack; confirm pack size and category.",
    "price": 1200,
    "images": [
      "images/rj45_connectors_1.webp",
      "images/rj45_connectors_2.webp",
      "images/rj45_connectors_3.webp"
    ]
  },
  {
    "id": "ethernet_patch_cables",
    "name": "Ethernet Patch Cables",
    "category": "Cables",
    "description": "Short Ethernet patch leads for connecting computers, routers, switches and other network equipment.",
    "price": 450,
    "images": [
      "images/ethernet_patch_cables_1.webp"
    ]
  },
  {
    "id": "ethernet_patch_cable",
    "name": "Ethernet Patch Cable",
    "category": "Cables",
    "description": "A ready-made network cable for connecting compatible devices over a wired Ethernet connection.",
    "price": 450,
    "images": [
      "images/ethernet_patch_cable_1.webp"
    ]
  },
  {
    "id": "network_appliance",
    "name": "Network Appliance",
    "category": "Network Equipment",
    "description": "A compact networking device. The exact function and specifications should be confirmed from the model label before purchase.",
    "price": 4500,
    "images": [
      "images/network_appliance_1.webp"
    ]
  },
  {
    "id": "wifi_router",
    "name": "Wi-Fi Router",
    "category": "Wireless Networking",
    "description": "Shares an internet connection with wireless and wired devices. Actual wireless speed, coverage and features depend on the model.",
    "price": 4500,
    "images": [
      "images/wifi_router_1.webp",
      "images/wifi_router_2.webp",
      "images/wifi_router_3.webp",
      "images/wifi_router_4.webp",
      "images/wifi_router_5.webp",
      "images/wifi_router_6.webp",
      "images/wifi_router_7.webp",
      "images/wifi_router_8.webp",
      "images/wifi_router_9.webp"
    ]
  }
];


/* ---------------- Internet package data ---------------- */

/* SmartLink home and business internet package catalogue. */
window.SMARTLINK_PACKAGES = [
  {
    "id": "home-speed-x",
    "type": "Home",
    "name": "Speed X",
    "speed": "100 Mbps",
    "price": 2000,
    "description": "Fast everyday browsing, smooth HD streaming and online learning.",
    "features": [
      "Fast everyday browsing",
      "Smooth HD streaming",
      "Ideal for online learning",
      "Reliable multi-device connectivity"
    ]
  },
  {
    "id": "home-semi-pro",
    "type": "Home",
    "name": "Semi-Pro",
    "speed": "200 Mbps",
    "price": 3500,
    "description": "A strong choice for family streaming, remote work and smart homes.",
    "features": [
      "Smooth family streaming",
      "Stable remote work connection",
      "Great for smart homes",
      "Reliable for multiple users"
    ]
  },
  {
    "id": "home-turbo",
    "type": "Home",
    "name": "Turbo",
    "speed": "500 Mbps",
    "price": 6000,
    "description": "High-speed connectivity for gaming, 4K streaming and heavy usage.",
    "features": [
      "Low-latency online gaming",
      "Fast large file downloads",
      "Seamless 4K streaming",
      "Heavy multi-user usage"
    ]
  },
  {
    "id": "business-start",
    "type": "Business",
    "name": "Business Start",
    "speed": "To be confirmed",
    "price": 0,
    "description": "Connectivity for small teams and daily business tasks.",
    "features": [
      "Email and cloud applications",
      "Video meetings and browsing",
      "Multiple office devices"
    ]
  },
  {
    "id": "business-pro",
    "type": "Business",
    "name": "Business Pro",
    "speed": "To be confirmed",
    "price": 0,
    "description": "Connectivity for growing teams with regular online workloads.",
    "features": [
      "Cloud services and file sharing",
      "Video conferencing",
      "Concurrent staff connections"
    ]
  },
  {
    "id": "business-enterprise",
    "type": "Business",
    "name": "Business Enterprise",
    "speed": "To be confirmed",
    "price": 0,
    "description": "Connectivity for larger teams and demanding operations.",
    "features": [
      "High-demand business workloads",
      "Multiple departments and users",
      "Custom network requirements"
    ]
  }
];


/* ---------------- Navigation, FAQ and contact form ---------------- */

/* SMARTLINK interactions: responsive navigation, FAQ accordion and form validation */
document.addEventListener("DOMContentLoaded", () => {
    /* Initialise the responsive navigation menu on every website page. */
    function initialiseMobileNavigation() {
        const menuButton = document.querySelector(".menu-toggle");
        const navigation = document.querySelector(".site-nav");

        if (!menuButton || !navigation) return;

        /* Toggle the mobile navigation open and closed. */
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("is-open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
            menuButton.textContent = isOpen ? "×" : "☰";
        });

        /* Close the mobile menu after a visitor chooses a page. */
        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
                menuButton.textContent = "☰";
            });
        });

        /* Reset the menu when the viewport returns to desktop size. */
        window.addEventListener("resize", () => {
            if (window.innerWidth > 700) {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            }
        });
    }

    /* Initialise the navigation before setting up the other page interactions. */
    initialiseMobileNavigation();

    /* Attach click behaviour to each FAQ question. */
    document.querySelectorAll(".faq-question").forEach((button) => {
        /* Expand or collapse the answer for the selected FAQ. */
        button.addEventListener("click", () => {
            const answer = document.getElementById(button.getAttribute("aria-controls"));
            const expanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!expanded));
            if (answer) answer.hidden = expanded;
            const symbol = button.querySelector("[data-faq-symbol]");
            if (symbol) symbol.textContent = expanded ? "+" : "−";
        });
    });

    const form = document.querySelector("#contact-form");
    if (form) {
        const status = form.querySelector(".form-status");
        const fields = [...form.querySelectorAll("input[required], textarea[required], select[required]")];

        /* Validate one contact form field and display its error message. */
        const validateField = (field) => {
            const value = field.value.trim();
            let message = "";

            if (!value) message = "This field is required.";
            else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                message = "Enter a valid email address.";
            } else if (field.type === "tel") {
                const digits = value.replace(/\D/g, "");
                const isKenyanLocal = /^(07|01)\d{8}$/.test(digits);
                const isKenyanInternational = /^254(7|1)\d{8}$/.test(digits);
                const isOtherInternational = /^\+?[1-9]\d{7,14}$/.test(value.replace(/[\s()-]/g, ""));
                if (!(isKenyanLocal || isKenyanInternational || isOtherInternational)) {
                    message = "Enter a valid phone number, e.g. 0712345678 or +254712345678.";
                }
            } else if (field.name === "name" && value.length < 2) {
                message = "Please enter at least 2 characters.";
            } else if (field.name === "message" && value.length < 10) {
                message = "Please enter at least 10 characters.";
            }

            field.setAttribute("aria-invalid", String(Boolean(message)));
            const error = form.querySelector(`#${field.id}-error`);
            if (error) error.textContent = message;
            return !message;
        };

        fields.forEach((field) => {
            /* Validate a field when the visitor leaves it. */
            field.addEventListener("blur", () => validateField(field));
            /* Re-check a field as the visitor corrects an earlier error. */
            field.addEventListener("input", () => {
                if (field.getAttribute("aria-invalid") === "true") validateField(field);
                if (status) status.textContent = "";
            });
        });

        /* Validate the completed form and prepare the enquiry in WhatsApp. */
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const valid = fields.map(validateField).every(Boolean);
            if (!valid) {
                status.textContent = "Please correct the highlighted fields before continuing.";
                const firstInvalid = fields.find((field) => field.getAttribute("aria-invalid") === "true");
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const formData = new FormData(form);
            const enquiry = [
                "Hello SmartLink, I would like to make an enquiry.",
                "",
                `Name: ${formData.get("name")}`,
                `Email: ${formData.get("email")}`,
                `Phone: ${formData.get("phone")}`,
                `Enquiry: ${formData.get("subject")}`,
                `Message: ${formData.get("message")}`
            ].join("\n");
            const whatsappUrl = "https://wa.me/254713416938?text=" + encodeURIComponent(enquiry);
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            status.textContent = "Your enquiry is ready in WhatsApp. Review it and tap Send.";
            form.reset();
            fields.forEach((field) => field.removeAttribute("aria-invalid"));
            form.querySelectorAll(".field-error").forEach((error) => error.textContent = "");
        });
    }
});


/* ---------------- Product catalogue and image gallery ---------------- */

/* SmartLink product catalogue and product image gallery. */
document.addEventListener("DOMContentLoaded", () => {
    const SUPPORT_WHATSAPP = "254713416938";
    const products = window.SMARTLINK_PRODUCTS || [];
    const grid = document.getElementById("product-grid");
    const search = document.getElementById("product-search");
    const modal = document.getElementById("product-modal");
    const detailContent = document.getElementById("product-detail-content");

    /* Format catalogue prices in Kenyan shillings. */
    /* Format a price in Kenyan shillings. */
    const money = (value) => "KSh " + Number(value || 0).toLocaleString("en-KE");

    /* Escape catalogue text before inserting it into the page. */
    /* Escape text before inserting catalogue content into HTML. */
    const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));

    /* Build a WhatsApp message for the selected product. */
    /* Create a WhatsApp message containing the selected product details. */
    function whatsappLink(product) {
        const message = [
            "Hello SmartLink, I am interested in this product:",
            `Product: ${product.name}`,
            `Category: ${product.category}`,
            `Indicative price: ${money(product.price)}`,
            "",
            "Please confirm the current price, specifications and availability."
        ].join("\n");
        return `https://wa.me/${SUPPORT_WHATSAPP}?text=${encodeURIComponent(message)}`;
    }

    /* Render product cards and their hover photographs. */
    /* Render matching product cards and their alternate hover images. */
    function renderProducts(filter = "") {
        const term = filter.trim().toLowerCase();
        const visible = products.filter((product) =>
            `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term)
        );

        if (!visible.length) {
            grid.innerHTML = '<p class="notice">No products match your search.</p>';
            return;
        }

        grid.innerHTML = visible.map((product) => {
            const first = product.images[0];
            const second = product.images[1] || first;
            return `<article class="card product-card">
                <div class="product-card__image-wrap">
                    <img class="product-card__image" src="${safe(first)}" alt="${safe(product.name)}" loading="lazy">
                    <img class="product-card__image product-card__image--hover" src="${safe(second)}" alt="" loading="lazy">
                </div>
                <div class="card-body">
                    <p class="product-card__category">${safe(product.category)}</p>
                    <h3>${safe(product.name)}</h3>
                    <p>${safe(product.description)}</p>
                    <div class="product-card__price">${money(product.price)}</div>
                    <div class="card-actions">
                        <button class="btn btn-primary" type="button" data-view-product="${safe(product.id)}">Product details</button>
                        <a class="btn btn-whatsapp" href="${whatsappLink(product)}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
                    </div>
                </div>
            </article>`;
        }).join("");
    }

    /* Open the product details modal. */
    /* Open the product details modal with all product photographs. */
    let previouslyFocusedElement = null;

    function openDetails(productId) {
        const product = products.find((item) => item.id === productId);
        if (!product) return;
        previouslyFocusedElement = document.activeElement;

        detailContent.innerHTML = `<div class="product-detail">
            <div>
                <img class="product-detail__main-image" id="detail-main-image" src="${safe(product.images[0])}" alt="${safe(product.name)}">
                <div class="product-detail__thumbs">
                    ${product.images.map((image, index) => `
                        <button class="product-detail__thumb" type="button" data-gallery-image="${safe(image)}" aria-label="View product image ${index + 1}">
                            <img src="${safe(image)}" alt="">
                        </button>`).join("")}
                </div>
            </div>
            <div>
                <p class="kicker">${safe(product.category)}</p>
                <h2 id="detail-name">${safe(product.name)}</h2>
                <p>${safe(product.description)}</p>
                <p class="price">${money(product.price)}</p>
                <p class="form-note">Price shown is an indicative sample price. Confirm the exact model, current price and availability with SmartLink.</p>
                <p><strong>Product photographs:</strong> ${product.images.length}</p>
                <a class="btn btn-whatsapp" href="${whatsappLink(product)}" target="_blank" rel="noopener noreferrer">Enquire / Order on WhatsApp</a>
            </div>
        </div>`;

        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
        modal.querySelector("[data-close-modal]").focus();
    }

    /* Handle product detail buttons. */
    /* Handle clicks on product detail buttons. */
    grid.addEventListener("click", (event) => {
        const button = event.target.closest("[data-view-product]");
        if (button) openDetails(button.dataset.viewProduct);
    });

    /* Switch the large product photograph when a thumbnail is selected. */
    /* Change the large product image when a thumbnail is selected. */
    detailContent.addEventListener("click", (event) => {
        const thumbnail = event.target.closest("[data-gallery-image]");
        if (thumbnail) {
            document.getElementById("detail-main-image").src = thumbnail.dataset.galleryImage;
        }
    });

    /* Close the product details modal. */
    /* Close the product details modal and restore page scrolling. */
    function closeDetails() {
        if (!modal.classList.contains("is-open")) return;
        modal.classList.remove("is-open");
        document.body.style.overflow = "";
        if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
            previouslyFocusedElement.focus();
        }
    }

    /* Close the product modal using its close button. */
    modal.querySelector("[data-close-modal]").addEventListener("click", closeDetails);
    /* Close the product modal when the backdrop is clicked. */
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeDetails();
    });
    /* Allow visitors to close the product modal with the Escape key. */
    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("is-open")) return;
        if (event.key === "Escape") {
            closeDetails();
            return;
        }
        if (event.key === "Tab") {
            const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')];
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    /* Filter the product catalogue as the visitor types. */
    /* Filter products immediately as the visitor types in the search field. */
    search.addEventListener("input", () => renderProducts(search.value));

    renderProducts();
});


/* ---------------- Internet package cards and WhatsApp links ---------------- */

/* SmartLink package cards and WhatsApp enquiries. */
document.addEventListener("DOMContentLoaded", () => {
    const SUPPORT_WHATSAPP = "254713416938";
    const packages = window.SMARTLINK_PACKAGES || [];

    /* Format package prices in Kenyan shillings. */
    /* Format package prices in Kenyan shillings. */
    const money = (value) => "KSh " + Number(value || 0).toLocaleString("en-KE");

    /* Escape package text before displaying it. */
    /* Escape package text before adding it to the page. */
    const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));

    /* Build the WhatsApp enquiry link for a package. */
    /* Build a WhatsApp enquiry containing the chosen package information. */
    function packageWhatsAppLink(item) {
        const price = Number(item.price) > 0 ? `${money(item.price)} per month` : "Please share the available price";
        const message = [
            "Hello SmartLink, I am interested in this internet package:",
            `Package: ${item.name}`,
            `Type: ${item.type}`,
            `Speed: ${item.speed}`,
            `Price: ${price}`,
            "",
            "Please share more details and confirm availability."
        ].join("\n");
        return `https://wa.me/${SUPPORT_WHATSAPP}?text=${encodeURIComponent(message)}`;
    }

    /* Display all packages for the selected customer category. */
    /* Render the home or business package cards in the correct section. */
    function render(type, targetId) {
        const host = document.getElementById(targetId);
        const selected = packages.filter((item) => item.type === type);
        host.innerHTML = selected.map((item) => `
            <article class="pricing-card">
                <div class="pricing-top">
                    <p class="plan-name">${safe(item.name)}</p>
                    <h3>${safe(item.speed)}</h3>
                    <p>${safe(item.description)}</p>
                </div>
                <ul class="check-list">${item.features.map((feature) => `<li>${safe(feature)}</li>`).join("")}</ul>
                <div class="price">${Number(item.price) > 0 ? `${money(item.price)} <small>/month</small>` : "Contact us for pricing"}</div>
                <div class="card-actions">
                    <a class="btn btn-whatsapp" href="${packageWhatsAppLink(item)}" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
                </div>
            </article>
        `).join("");
    }

    render("Home", "home-package-grid");
    render("Business", "business-package-grid");
});


/* Show the floating social media rail while the visitor is scrolling, then hide it gently. */
(function initialiseScrollSocialRail() {
    const socialRail = document.querySelector(".social-rail");

    /* Stop if the current page does not contain the social media rail. */
    if (!socialRail) {
        return;
    }

    let hideTimer;

    /* Reveal the social icons whenever scrolling or keyboard interaction is active. */
    function revealSocialRail() {
        socialRail.classList.add("is-visible");
        window.clearTimeout(hideTimer);

        /* Hide the icons after scrolling has been idle for a short moment. */
        hideTimer = window.setTimeout(() => {
            socialRail.classList.remove("is-visible");
        }, 1500);
    }

    /* Keep the icons visible while a visitor focuses or hovers over them. */
    function keepSocialRailVisible() {
        window.clearTimeout(hideTimer);
        socialRail.classList.add("is-visible");
    }

    /* Start the idle fade after the visitor leaves the social media rail. */
    function scheduleSocialRailHide() {
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => {
            socialRail.classList.remove("is-visible");
        }, 1500);
    }

    window.addEventListener("scroll", revealSocialRail, { passive: true });
    socialRail.addEventListener("mouseenter", keepSocialRailVisible);
    socialRail.addEventListener("mouseleave", scheduleSocialRailHide);
    socialRail.addEventListener("focusin", keepSocialRailVisible);
    socialRail.addEventListener("focusout", scheduleSocialRailHide);
})();
