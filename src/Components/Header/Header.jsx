"use client"

import { useEffect, useState } from "react"
import "./Header.css"
import logo from "./Assets/logo.png"
import { Hamberger, IntoMark } from "../../HeroIcons"
import { Link, useNavigate } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa6"

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const [isLogoOpen, setIsLogoOpen] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWidth)

    return () => window.removeEventListener("resize", handleWidth)
  }, [])

  const navigatorOption = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const serviceOptions = [
    { name: "MVAP", path: "/mvap" },
    { name: "VIP", path: "/vip" },
    { name: "IEMAP", path: "/iemap" },
    { name: "Outcomes", path: "/outcomes" },
    { name : "Insights", path: "/insights"},
    { name : "SLR/TLR", path : "/knolens"}
  ]

  return (
    <>
      <header>
        {width > 728 ? (
          <div className="head_wraper">
            <div className="logo_container">
              <img
                src={logo || "/placeholder.svg"}
                alt="Logo not found"
                className="company_logo"
                onClick={() => navigate("/")}
              />
              <p
                className="head_9"
                style={{
                  fontSize: "11px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  marginLeft: -20,
                  marginRight: 30,
                  fontStyle: "italic",
                }}
              >
                Meeting your needs. Surpassing your expectations.
              </p>
            </div>
            <div className="route_container">
              <Link to={"/"}>
                <span className="route_names">Home</span>
              </Link>
              <div
                className="services-dropdown-container"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link to={"/services"}>
                  <span className="route_names">Services</span>
                </Link>
                <div className={`services-dropdown ${showServicesDropdown ? "show" : ""}`}>
                  {serviceOptions.map((service, index) => (
                    <Link to={service.path} key={index} className="dropdown-item">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to={"/contactus"}>
                <span className="route_names">Contact Us</span>
              </Link>
            </div>
            <div className="route_links">
              <a
                href="https://www.linkedin.com/company/mktxs/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={21} color="white" className="linku" />
              </a>
            </div>
          </div>
        ) : (
          <div className="head_wraper">
            <div className="logo_container">
              <img
                src={logo || "/placeholder.svg"}
                alt="Logo not found"
                className="company_logo"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <div className="route_links" style={{ margin: "auto" }}>
                <a
                  href="https://www.linkedin.com/company/mktxs/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={22} color="rgb( 27 ,173 ,153)" className="linku" />
                </a>
              </div>
            </div>
            <div className="hamberger_div" onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <IntoMark /> : <Hamberger />}
            </div>
          </div>
        )}
      </header>

      {width <= 720 && (
        <button onClick={() => setIsOpen(!isOpen)} style={{ margin: "10px" }}>
          ☰ Menu
        </button>
      )}

      {isOpen && <div className={`overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}></div>}

      {width <= 720 && (
        <div className={`drop_down_menu ${isOpen ? "open" : ""}`}>
          <div style={{ marginTop: "30px" }} onClick={() => setIsOpen(!isOpen)}>
            <IntoMark />
          </div>
          <div
            onClick={() => {
              navigate("/")
              setIsOpen(false)
            }}
            className="anchor"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/contactus")
              setIsOpen(false)
            }}
            className="anchor"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Contact Us
          </div>
          <div className="anchor services-mobile" style={{ textDecoration: "none" }}>
            Services
            <div className="mobile-services-dropdown">
              {serviceOptions.map((service, index) => (
                <div
                  key={index}
                  className="mobile-dropdown-item"
                  onClick={() => {
                    navigate(service.path)
                    setIsOpen(false)
                  }}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isLogoOpen && (
        <div className="floating-overlay" onClick={() => setIsLogoOpen(false)}>
          <div className="logo-container">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="logo" />
          </div>
        </div>
      )}
    </>
  )
}

export default Header
