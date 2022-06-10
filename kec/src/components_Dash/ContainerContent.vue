<template>
  <div class="app-body-main-content">
    <section class="service-section">
      <h2>Service</h2>
      <div class="service-section-header">
        <div class="search-field">
          <i class="ph-magnifying-glass"></i>
          <input type="text" placeholder="Account number" />
        </div>
        <div class="dropdown-field">
          <select>
            <option>Home</option>
            <option>Work</option>
          </select>
          <i class="ph-caret-down"></i>
        </div>
        <button class="flat-button">Search</button>
      </div>
      <div class="mobile-only">
        <button class="flat-button">Toggle search</button>
      </div>
      <div class="tiles">
        <article class="tile">
          <div class="tile-header">
            <i class="ph-lightning-light"></i>
            <h3>
              <span>Electricity</span>
              <span>UrkEnergo LTD.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article class="tile">
          <div class="tile-header">
            <i class="ph-fire-simple-light"></i>
            <h3>
              <span>Heating Gas</span>
              <span>Gazprom UA</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article class="tile">
          <div class="tile-header">
            <i class="ph-file-light"></i>
            <h3>
              <span>Tax online</span>
              <span>Kharkov 62 str.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article class="tile">
          <div class="tile-header">
            <i class="ph-file-light"></i>
            <h3>
              <span>Tax online</span>
              <span>Kharkov 62 str.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
      </div>
      <div class="service-section-footer">
        <p>
          Services are paid according to the current state of the currency and
          tariff.
        </p>
      </div>
    </section>
    <section class="transfer-section">
      <div class="transfer-section-header">
        <h2>Latest transfers</h2>
        <div class="filter-options">
          <p>Filter selected: more than 100 $</p>
          <button class="icon-button">
            <i class="ph-funnel"></i>
          </button>
          <button class="icon-button">
            <i class="ph-plus"></i>
          </button>
        </div>
      </div>
      <div class="transfers">
        <div class="transfer">
          <div class="transfer-logo">
            <img src="https://assets.codepen.io/285131/apple.svg" />
          </div>
          <dl class="transfer-details">
            <div>
              <dt>Apple Inc.</dt>
              <dd>Apple ID Payment</dd>
            </div>
            <div>
              <dt>4012</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>28 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div class="transfer-number">- $ 550</div>
        </div>
        <div class="transfer">
          <div class="transfer-logo">
            <img src="https://assets.codepen.io/285131/pinterest.svg" />
          </div>
          <dl class="transfer-details">
            <div>
              <dt>Pinterest</dt>
              <dd>2 year subscription</dd>
            </div>
            <div>
              <dt>5214</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>26 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div class="transfer-number">- $ 120</div>
        </div>
        <div class="transfer">
          <div class="transfer-logo">
            <img src="https://assets.codepen.io/285131/warner-bros.svg" />
          </div>
          <dl class="transfer-details">
            <div>
              <dt>Warner Bros.</dt>
              <dd>Cinema</dd>
            </div>
            <div>
              <dt>2228</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>22 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div class="transfer-number">- $ 70</div>
        </div>
      </div>
    </section>
  </div>
</template>
