<script>
    import FakeA from './FakeA.svelte';
</script>

<nav class="navbar">
    <div class="navbar-brand">
        <FakeA class="navbar-burger burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </FakeA>
    </div>
    <div class="navbar-menu" id="navbarBasicExample">
        <div class="navbar-start">
            <div class="navbar-item">
                <h1 class="title">Crypter</h1>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a href="https://github.com/Olyno/Crypter" class="button is-dark">
                        <span><i class="fab fa-github"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>