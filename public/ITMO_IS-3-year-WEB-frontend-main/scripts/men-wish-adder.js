(function () {
  const STORAGE_KEY = 'men_properties'

  function renderRow(property, priority) {
    const template = document.getElementById("storageRowTemplate");
    console.log("Новая строка:", template)

    const clone = template.content.cloneNode(true);
    const cloneProperty = clone.querySelectorAll(".storage_property")[0];
    const clonePriority = clone.querySelectorAll(".storage_priority")[0];

    cloneProperty.textContent = property;
    clonePriority.textContent = priority;

    const storagEl = document.getElementsByClassName('storage')[0]

    storagEl.appendChild(clone);
  }

  window.addEventListener("load", () => {
    const menStorage = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const properties_list = Array.isArray(menStorage) ? menStorage : []

    properties_list.forEach(property => {
      if (property.name) {
        renderRow(property.name, property.priority)
      }
    })

    const form = document.getElementsByName("addProperty")[0]
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const name = form.name.value
      const priority = form.priority.value
      renderRow(name, priority)
      properties_list.push({ name, priority })
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(properties_list))
    })
  })
})();    
