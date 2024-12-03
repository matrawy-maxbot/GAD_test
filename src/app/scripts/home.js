export default function initializeClientSideScripts() {
    
    class ApiClient {

        #baseURL;
        #token;
        #headers;
    
        constructor(baseURL) {
            this.#baseURL = baseURL;
            this.#token = sessionStorage.getItem("accessToken") || null;
            this.#headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `13cc665abb3b9d8a07e3211208e3a5a2c6106baa0c2354487a785fc6ef2be1219f4a042ea822fe4087bd4fd9a2614595`,
            };
        }
      
        async #request(endpoint, method = "GET", data = null, headers = {}) {
            try {
                const options = {
                    method,
                    headers: {
                        ...this.#headers,
                        ...headers
                    },
                };
        
                if (data) {
                    if (options.headers["Content-Type"] === "application/json") {
                        options.body = JSON.stringify(data);
                    } else {
                        delete options.headers["Content-Type"];
                        options.body = data;
                    }
                }
        
                const response = await fetch(`${this.#baseURL}${endpoint}`, options);
        
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "An error occurred");
                }
        
                return await response.json();
            } catch (error) {
                console.error("API Request Error:", error);
                throw error;
            }
        }
      
        // GET method
        get(endpoint, headers = {}) {
            return this.#request(endpoint, "GET", null, headers);
        }
      
        // POST method
        post(endpoint, data, headers = {}) {
            return this.#request(endpoint, "POST", data, headers);
        }
      
        // PUT method
        put(endpoint, data, headers = {}) {
            return this.#request(endpoint, "PUT", data, headers);
        }
      
        // DELETE method
        delete(endpoint, headers = {}) {
            return this.#request(endpoint, "DELETE", null, headers);
        }
    
        setToken(token) {
            sessionStorage.setItem("accessToken", token);
            this.#token = token;
            this.#headers['Authorization'] = `Bearer ${token}`;
        }
    
        login(token) {
    
        }
    
        logout() {
            sessionStorage.removeItem("accessToken");
            this.#token = "";
            this.#headers['Authorization'] = "";
        }
    
        checkToken() {
            let token = sessionStorage.getItem("accessToken") || this.#token || this.#headers['Authorization'] || '';
            token = token.toString().toLowerCase();
            if(!token || token == null || token == 'null') return false;
            else if(token.replace(/bearer/g, "").replace(/null/g, "").trim().length == 0) return false;
            else return true;
        }
    }
    
    const api = new ApiClient("http://localhost:3000");
    
    const allCounterNumbers = document.querySelectorAll(".th-section .counter .counter-num .c-num-container");
    for (let i = 0; i < allCounterNumbers.length; i++) {
        let element = allCounterNumbers[i];
        let value = element.dataset.target;
        element.style.setProperty("--target", value);
    }
    
    function showSectionWindow() {
        document.getElementsByClassName("section-window-parent")[0]?.classList.add("active");
        exploreImagesAnimation();
    }
    
    function showFormWindow() {
        document.getElementsByClassName("form-window-parent")[0]?.classList.add("active");
    }
    
    function designSectionWindow() {
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("programming");
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("printing");
        document.getElementsByClassName("section-window-parent")[0]?.classList.add("design");
        document.body.style.overflowY = "hidden";
        showSectionWindow();
    }
    
    function programmingSectionWindow() {
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("design");
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("printing");
        document.getElementsByClassName("section-window-parent")[0]?.classList.add("programming");
        document.body.style.overflowY = "hidden";
        showSectionWindow();
    }
    
    function marketingSectionWindow() {
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("programming");
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("design");
        document.getElementsByClassName("section-window-parent")[0]?.classList.add("printing");
        document.body.style.overflowY = "hidden";
        showSectionWindow();
    }
    
    function closeSectionWindow() {
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("design");
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("programming");
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("printing");
        document.body.style.overflowY = "auto";
        document.getElementsByClassName("section-window-parent")[0]?.classList.remove("active");
    }
    
    function closeFormWindow() {
        document.getElementsByClassName("form-window-parent")[0]?.classList.remove("active");
    }
    
    function getFacebookPage() {
        window.open("https://www.facebook.com/GadoArtsiticDesign", '_blank');
    }
    
    function getBehanceAccount() {
        window.open("https://www.behance.net/gadoartisticdesign", '_blank');
    }
    
    function getHomePage() {
        let baseURL = window.location.origin.includes("file://") ? undefined : window.location.origin;
        baseURL = baseURL || (window.location.origin + window.location.pathname);
        location.href = baseURL;
    }
    
    function getWhatsappAccount() {
        openWhatsapp("+201120327504");
    }
    
    function openFAQ() {
        document.getElementsByClassName("faq")[0].classList.add("active");
    }
    
    function closeFAQ() {
        document.getElementsByClassName("faq")[0].classList.remove("active");
    }
    
    function openCloseQuestion(question) {
        question.classList.contains("active") ? question.classList.remove("active") : question.classList.add("active");
    }
    
    function openWhatsapp(phoneNumber) {
        if (!phoneNumber) {
            console.error("Phone number is required!");
            return;
        }
        phoneNumber = refactorPhoneNumber(phoneNumber);
        const formattedNumber = phoneNumber.startsWith('0') ? phoneNumber.slice(1) : phoneNumber;
        const link = `https://wa.me/${formattedNumber}`;
        window.open(link, '_blank');
    }
    
    function refactorPhoneNumber(phoneNumber) {
        let cleanedNumber = phoneNumber.replace(/[^+\d]/g, '');
        if (cleanedNumber.startsWith('0')) {
            cleanedNumber = cleanedNumber.slice(1);
        } else if(cleanedNumber.startsWith('+')) {
            if(cleanedNumber[1] == '0') cleanedNumber = cleanedNumber.slice(1);
        }
        return cleanedNumber;
    }
    
    function projectRange(event, className) {
        let element = event.target;
        while(!element.classList.contains("range")) {
            element = element.parentElement;
        }
        element.classList.remove('part1');
        element.classList.remove('part2');
        element.classList.remove('part3');
        element.classList.add(className);
        console.log(element, className);
    }
    
    function setTheme() {
        const bodyElement = document.body;
        if(bodyElement.classList.contains("dark")) bodyElement.classList.remove("dark");
        else bodyElement.classList.add("dark");
    }
    
    function exploreProjects() {
        getBehanceAccount();
    }
    /*
    document.getElementById('add-request-form').addEventListener('submit', async function (e) {
    
        e.preventDefault();
    
        const CompanyNameElement = document.getElementById('companyName');
        const contactNumber1Element = document.getElementById('phone1');
        const contactNumber2Element = document.getElementById('phone2');
        const whatsappNumberElement = document.getElementById('whatsappNumber');
        const whatsappNumber1Element = document.getElementById('whatsappNumber1');
        const whatsappNumber2Element = document.getElementById('whatsappNumber2');
        const designSrviceElement = document.getElementById('designBusinessRequired');
        const programmingSrviceElement = document.getElementById('programmingBusinessRequired');
        const printingSrviceElement = document.getElementById('printingBusinessRequired');
        const personalCompanySizeElement = document.getElementById('personalCompanySize');
        const smallCompanySizeElement = document.getElementById('smallCompanySize');
        const mediumCompanySizeElement = document.getElementById('mediumCompanySize');
        const largeCompanySizeElement = document.getElementById('largeCompanySize');
        const enterpriseCompanySizeElement = document.getElementById('enterpriseCompanySize');
    
        let companyName = CompanyNameElement?.value?.trim() || '';
        let contactNumbers = [document.getElementById('phone1')?.value?.trim()] || [];
        if(document.getElementById('phone2')?.value?.trim()) contactNumbers.push(document.getElementById('phone2').value.trim());
        let whatsappNumbers = [whatsappNumberElement?.value?.trim()] || [];
        if(whatsappNumber1Element.checked || whatsappNumber2Element.checked){
            whatsappNumbers = [];
            if(whatsappNumber1Element.checked) whatsappNumbers.push(contactNumber1Element?.value?.trim());
            if(whatsappNumber2Element.checked) whatsappNumbers.push(contactNumber2Element?.value?.trim());
        }
    
        let selectedServices = [];
        if(designSrviceElement.checked) selectedServices.push("design");
        if(programmingSrviceElement.checked) selectedServices.push("programming");
        if(printingSrviceElement.checked) selectedServices.push("printing");
    
        let companySize = [];
        if(personalCompanySizeElement.checked) companySize.push("personal");
        if(smallCompanySizeElement.checked) companySize.push("small");
        if(mediumCompanySizeElement.checked) companySize.push("medium");
        if(largeCompanySizeElement.checked) companySize.push("large");
        if(enterpriseCompanySizeElement.checked) companySize.push("enterprise");
    
        let warnsCount = 0;
    
        let CompanyNameElementParent = CompanyNameElement;
        while(!CompanyNameElementParent.classList.contains('field')) {
            CompanyNameElementParent = CompanyNameElementParent.parentElement;
        }
        if(companyName.length == 0) {
            warnsCount++;
            CompanyNameElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else CompanyNameElementParent.querySelector(".warnMessage").classList.remove('active');
    
        let contactNumberElementParent = contactNumber1Element;
        while(!contactNumberElementParent.classList.contains('field')) {
            contactNumberElementParent = contactNumberElementParent.parentElement;
        }
        if(contactNumbers.filter(c => c.length > 0).length == 0) {
            warnsCount++;
            contactNumberElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else contactNumberElementParent.querySelector(".warnMessage").classList.remove('active');
        
        let whatsappNumberElementParent = whatsappNumberElement;
        while(!whatsappNumberElementParent.classList.contains('field')) {
            whatsappNumberElementParent = whatsappNumberElementParent.parentElement;
        }
        if(whatsappNumbers.filter(w => w.length > 0).length == 0) {
            warnsCount++;
            whatsappNumberElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else whatsappNumberElementParent.querySelector(".warnMessage").classList.remove('active');
        
        let requiredServiceElementParent = designSrviceElement;
        while(!requiredServiceElementParent.classList.contains('field')) {
            requiredServiceElementParent = requiredServiceElementParent.parentElement;
        }
        if(selectedServices.length == 0) {
            warnsCount++;
            requiredServiceElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else requiredServiceElementParent.querySelector(".warnMessage").classList.remove('active');
    
        let companySizeElementParent = personalCompanySizeElement;
        while(!companySizeElementParent.classList.contains('field')) {
            companySizeElementParent = companySizeElementParent.parentElement;
        }
        if(companySize.length == 0) {
            warnsCount++;
            companySizeElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else companySizeElementParent.querySelector(".warnMessage").classList.remove('active');
    
        let formData = {
            "name": companyName,
            "contact_numbers": contactNumbers,
            "whatsapp_numbers": whatsappNumbers,
            "business_requires": selectedServices,
            "company_size": companySize
        }
    
        console.log("form data : ", formData);
        if(warnsCount == 0) {
            console.log("We are ready! ");
            let result = await api.post(`/requests`, formData);
            console.log(result);
            document.querySelector('.form-window-parent').classList.remove('active', 'add');
        }
    
    });
    */
    function startAnimation() {
    
        firstSectionProjects();
        
    }
    
    function firstSectionProjects() {
    
        setInterval(() => {
    
            let allProjects = Array.from(document.querySelectorAll(".f-section .background .lines .circles .circle")).map(c => window.getComputedStyle(c).getPropertyValue("opacity") == 1 ? c : undefined);
            allProjects = allProjects.filter(p => p && !p.classList.contains("active"));
            let random = getRandom(allProjects.length);
            let random2 = getRandom(allProjects.length, random);
            let element = allProjects[random];
            let element2 = allProjects[random2];
    
            if(element) element.classList.add("active");
    
            setTimeout(() => {
                if(element) element.classList.remove("active");
            }, 3000);
    
            setTimeout(() => {
                if(element2) element2.classList.add("active");
            }, 200);
            setTimeout(() => {
                if(element2) element2.classList.remove("active");
            }, 3200);
    
        }, 3000);
        
    }

    function getRandom(count, except = -1) {
        if (count < 1) throw new Error("Count must be at least 1");
        if (count === 1 && except === 0) return 0;
    
        let random;
        do {
            random = Math.round(Math.random() * (count - 1));
        } while (random === except);
    
        return random;
    }
    
    function brandsAnimation() {
        
        const allBrands = document.querySelectorAll(".s-section .brands img.brand");
        let brandIndex = 0;
        setInterval(() => {
            
            if(brandIndex >= allBrands.length) brandIndex = 0;
            let activeBrands = document.querySelectorAll(".s-section .brands img.brand.active");
            activeBrands.forEach(b => b.classList.remove("active"));
            allBrands[brandIndex].classList.add("active");
            brandIndex++;
    
        }, 1500);
    
    }
    
    function feedbackChange() {
        let allFeedbacks = document.querySelectorAll(".fi-section.visible .feedbacks .feedback");
        let activeFeedback = allFeedbacks.entries().toArray().filter(f => f[1].classList.contains("f4"))[0];
        let activeFeedbackIndex = activeFeedback[0];
        let currentIndex = activeFeedbackIndex + 1;
        let classIndex = 4;
        for (let i = 0; i < allFeedbacks.length; i++) {
            if(currentIndex > allFeedbacks.length - 1) currentIndex = 0;
            let element = allFeedbacks[currentIndex];
            for (let j = 1; j <= allFeedbacks.length; j++) {
                element.classList.remove("f" + j);
                element.classList.remove("f" + j + "Change");
            }
            if(classIndex > allFeedbacks.length) classIndex = 1;
            element.classList.add("f" + classIndex);
            element.classList.add("f" + classIndex + "Change");
            currentIndex++;
            classIndex++;
        }
    }
    
    function exploreImagesChange() {
        let allFeedbacks = document.querySelectorAll(".section-window-parent.active .section-window-container > .content-container > .content .image-gallery .image");
        if(allFeedbacks.length == 0) return;
        let activeFeedback = allFeedbacks.entries().toArray().filter(f => f[1].classList.contains("i4"))[0];
        let activeFeedbackIndex = activeFeedback[0];
        let currentIndex = activeFeedbackIndex + 1;
        let classIndex = 4;
        for (let i = 0; i < allFeedbacks.length; i++) {
            if(currentIndex > allFeedbacks.length - 1) currentIndex = 0;
            let element = allFeedbacks[currentIndex];
            for (let j = 1; j <= allFeedbacks.length; j++) {
                element.classList.remove("i" + j);
            }
            if(classIndex > allFeedbacks.length) classIndex = 1;
    
            element.classList.add("changing", "i" + classIndex);
            currentIndex++;
            classIndex++;
        }
    }
    
    var feedbackIntervalId = 0;
    var exploreIntervalId = 0;
    
    function FeedbackAnimation() {
        if(feedbackIntervalId == 1) return;
        feedbackIntervalId = 1;
        setInterval(() => {
            feedbackChange();
        }, 8000);
    }
    
    function exploreImagesAnimation() {
        if(exploreIntervalId == 1) return;
        exploreIntervalId = 1;
        setInterval(() => {
            exploreImagesChange();
        }, 6000);
    }
    
    function observe(element, threshold, callback) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        if(callback) callback();
                    }
                });
            },
            { threshold: threshold }
        );
        observer.observe(element);
    }
    
    observe(document.querySelector("#third_section"), 0.4);
    observe(document.querySelector("#fourth_section .design-section"), 0.2);
    observe(document.querySelector("#fourth_section .programming-section"), 0.25);
    observe(document.querySelector("#fourth_section .print-section"), 0.25);
    observe(document.querySelector("#fifth_section"), 0.6, FeedbackAnimation); 
    observe(document.querySelector("#last_section"), 0.4);

    setTimeout(startAnimation, 0);
    setTimeout(brandsAnimation, 0);
}