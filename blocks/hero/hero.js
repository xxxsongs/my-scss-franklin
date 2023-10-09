export function removeEmptyPTags(element) {
  element.querySelectorAll('p').forEach((p) => {
    // get rid of empty p tags
    if (p.children.length === 0) {
      p.remove();
    }
  });
}

export default function decorate(block) {
  const elementContainer = block.querySelector(':scope > div > div');
  const rightBox = document.createElement('div');
  rightBox.classList.add('hero-image-container');
  rightBox.append(elementContainer.querySelector('picture'));
  block.append(rightBox);

  const leftBox = document.createElement('div');
  leftBox.classList.add('hero-content-container');
  leftBox.append(...elementContainer.children);

  block.prepend(leftBox);
  elementContainer.parentElement.remove();
  removeEmptyPTags(block);
}
