import React from 'react'
import NavbarMenu from './NavbarMenu'
export default function Home() {
  return (
    <div>
      <NavbarMenu/>
      <section id="my-home" class="py-5 bg-light">
    <div class="container text-center">
        <h2 class="mb-4">Welcome to RestoHub</h2>
        <p class="lead">RestoHub is your ultimate restaurant management app, designed to simplify the way you handle restaurant information.</p>
        
        <div class="row mt-5">
            <div class="col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Add Restaurants</h3>
                        <p class="card-text">Easily add new restaurants with detailed information like name, location, and menu options.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Edit Details</h3>
                        <p class="card-text">Update restaurant information such as contact details, name, and location as needed.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Search Functionality</h3>
                        <p class="card-text">Use our powerful search feature to find restaurants based on location.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <p class="mt-4">Whether you're a restaurant owner, manager, or simply a food enthusiast, RestoHub is your go-to app for efficient restaurant management.</p>
    </div>
</section>

    </div>
  )
}
