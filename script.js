/* Gallery image improvements */

.cards {
  align-items: stretch;
}

.card img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  display: block;
}

.card {
  overflow: hidden;
}

.card h3,
.card p {
  padding-left: 20px;
  padding-right: 20px;
}

.card h3 {
  margin-top: 18px;
}

.card p {
  margin-bottom: 20px;
}

@media (max-width: 700px) {
  .card img {
    height: 260px;
  }
}

