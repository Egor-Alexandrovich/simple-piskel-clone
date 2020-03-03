export function activeElement(previousElement, nextElement, activeClassName) {
    previousElement.classList.remove(activeClassName);
    nextElement.classList.add(activeClassName);
}
