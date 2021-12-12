<template>
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        
        <ul class="nav navbar-nav flex-row float-left">
          <li class="nav-item">
            <!-- <a class="navbar-brand float-left" href="/" target="_blank">
                SUST Project manager
            </a>
            -->
           <router-link class="btn pr-3" to="/">SUST Project Manager</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/student">Student</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/teacher">Teacher</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/project">Project</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/course">Course</router-link>
          </li>
        </ul>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
        </ul>

      </div>
    </nav>
</template>