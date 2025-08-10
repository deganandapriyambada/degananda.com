---
layout: posts
author: Degananda Ferdian
categories: java
series-code: RUST001
excerpt: Install rust on Mac Apple Silicon (ARM64) CPU Architecture and use Visual Studio Code as the IDE (Integrated development environment)
tags: rust
topics: rust
ptype: News
background: Many online media from various IT profesional claimed and tested that rust is one of the top programming language that has the fastest performance compared to Go,Java,NodeJS and even on par with C++
objective: to Install Rust on Mac with Apple Silicon CPU
deliverables: Article
---

# Objectives

Below are the objectives on this article

1. to download and install Rust On MAC with Apple Silicon CPU Architecture (ARM 64 Bit)
2. to create hello world program on Rust using visual studio code.
3. Integrate **"cargo"** (rust) package manager to the hello world program

# Install Rust

Like the other programming language, There are several way to install rust. Ranging from manual installation and assisted installation via specific system package manager such as homebrew, chocolately, scoop, etc.

## Install Rust via Rustup (official recommendation)

    Most recommended method as the shell script content is fully readable. Giving Full control during the installation.

Most simple and straightforward rust installation. It download shell script that avaialble from rustup websites and execute the script.

    curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

Above comamnd should work on linux and mac os operating system. 

![postimage100](/assets/images/2025-08/rust1.jpg)
[Step 1 - Rust Installer is downloaded](/assets/images/2025-08/rust1.jpg){: .center-image }

At first, the shell script will download rust installer and then proceed with the actual installation.

![postimage100](/assets/images/2025-08/rust2.jpg)
[Step 2 - Choose standard installation](/assets/images/2025-08/rust2.jpg){: .center-image }

Choose 1 => proceed with standard installation unless there is need to change default configuration (eg: directory location, etc)

![postimage100](/assets/images/2025-08/rust3.jpg)
[Step 3 - Wait until installation completed](/assets/images/2025-08/rust3.jpg){: .center-image }

    Installation time will be dependent on the machine's internet connection speed as its use internet to download additional package

wait until the installation (including additional packages such as cargo that need to be added) completion

<hr />

Once the installation completed, execute following command to validate (terminal restart is needed after the installation completed)

![postimage100](/assets/images/2025-08/rust5.jpg)
[Check installed rust version](/assets/images/2025-08/rust5.jpg){: .center-image }

    rustc --version

if the process is success, it should return rust version on the terminal responses.

to update rust using rustup

    rustup update

## Install Rust Via Homebrew

brew is the system package manager that available on mac os. Second alternative to the rustup. 

    brew install rust

Some machine might have different security control, it will be depend which method that is possible to execute (homebrew or via shell script).

apart from distinguishing rust file, this extension also came with following additional packages:

1. rust analyzer
2. auto complete for rust
3. dependecy manager extension for rust cargo

## (Optional) Install C Compiler

Some of rust packages are dependent on C Compiler. It is also recommended to install C Compiler as well of Mac OS

    $ xcode-select --install

# Visual Studio Code Extension for Rust

![postimage100](/assets/images/2025-08/rust4.jpg)
[VSC Extension for Rust](/assets/images/2025-08/rust4.jpg){: .center-image }


Go to extension tab on vsc and install rust additional add-on. It will enable vsc to recognize rust language and files. 

## Hello Rust on VSC

![postimage100](/assets/images/2025-08/rust7.jpg)
[hello rust on VSC](/assets/images/2025-08/rust7.jpg){: .center-image }

create a new folder

    mkdir hellorust
    cd hellorust

open the folder using vsc create a file called main.rs (rs is the extension of the rust file)

```rust
fn main(){
    println!("Hello Rust !")
}
```

compile (rustc is stand for rust compile)

    rustc main.rs

rustc command will compile the .rs file into binary code

then, run the rust file program 

    .\main.rs  

## Rust with Cargo!

On NodeJS, program can be run using two different method.

directly compile and run using "node"

    node main.js

or via npm/node package manager (assuming its configured under start script)

    npm run start

same approach can also be done on rust using cargo (the package manager for rust)

ensure the cargon has been installed (should be included during installation process, either via rustup or homebrew)
 
    cargo --version

create rust project with cargo

    cargo new hellrustcargo

it will automatically create the project structure

![postimage100](/assets/images/2025-08/rust8.jpg)
[Generated rust project skeleton by cargo](/assets/images/2025-08/rust8.jpg){: .center-image }


```json
(base) deganandaferdian@degananda rustworkspaces % cargo new hellorustcargo
    Creating binary (application) `hellorustcargo` package
note: see more `Cargo.toml` keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html
```

![postimage100](/assets/images/2025-08/rust9.jpg)
[Build and run with cargo](/assets/images/2025-08/rust9.jpg){: .center-image }


build the project (ensure the terminal pointed to folder where the **Cargo.toml** is presented)

    cargon build

run the project

    cargo run