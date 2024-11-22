import Link from 'next/link'
import React from 'react'

export const Rodape = () => {
  return (
    <div>
      <h2>REDES SOCIAIS</h2>
      <div className="social-media-links">
        <div className="social-media-item">
          <ul>
            <li>
              <Link 
                className="facebook-link" 
                target="_blank" 
                rel="noopener" 
                title="Facebook" 
                href="https://www.facebook.com"  // Substitua pelo link real
              >
                FACEBOOK
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media-item">
          <ul>
            <li>
              <Link 
                className="instagram-link" 
                target="_blank" 
                rel="noopener" 
                title="Instagram" 
                href="https://www.instagram.com"  // Substitua pelo link real
              >
                INSTAGRAM
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media-item">
          <ul>
            <li>
              <Link 
                className="github-link" 
                target="_blank" 
                rel="noopener" 
                title="GitHub" 
                href="https://github.com"  // Substitua pelo link real
              >
                GITHUB
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
