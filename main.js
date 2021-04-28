'use strict';

const $horizontal = document.querySelector('.horizontal');
const $vertical = document.querySelector('.vertical');
const $target = document.querySelector('.target');
const $tag = document.querySelector('.tag');
const $targetRect = $target.getBoundingClientRect();
const $targetHalfWidth = $targetRect.width / 2;
const $targetHalfHeight = $targetRect.height / 2;

document.addEventListener('mousemove', displayTarget);

function displayTarget(e) {
  const x = e.clientX;
  const y = e.clientY;

  $vertical.style.transform = `translateX(${x}px)`;
  $horizontal.style.transform = `translateY(${y}px)`;
  $target.style.transform = `translate(${x - $targetHalfWidth}px, ${
    y - $targetHalfHeight
  }px)`;
  $tag.style.transform = `translate(${x}px, ${y}px)`;
  $tag.textContent = `${x}px, ${y}px`;
}
