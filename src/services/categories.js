// Render de la vista categorías

export const renderCategories = () => {
  const ulList = document.getElementById('listFilter')
  ulList.innerHTML = `
    <li id='todos'> Todos los productos </li>
    <li id='hamburguesas'> Hamburguesas </li>
    <li id='papas'> Papas </li>
    <li id='gaseosas'> Gaseosas </li>
    <li id='mayorPrecio'> Mayor Precio </li>
    <li id='menorPrecio'> Menos Precio </li>
  `

  const liElements = ulList.querySelectorAll('li')
  liElements.forEach((li) => {
    li.addEventListener('click', (event) => {
      handleClick(li)
    })
  })

  const handleClick = (element) => {
    liElements.forEach((li) => {
      if (li.classList.contains('liActive')) {
        li.classList.remove('liActive')
      } else if (li === element) {
        li.classList.add('liActive')
      }
    })
  }
}
