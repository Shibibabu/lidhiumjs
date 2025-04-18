"use client";

import CodeBlock from "../CodeBlock";
import { useEffect } from "react";

export default function InstallationSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="installation" className="h-full">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Getting Started with Lidhium.js
        </h1>
        <div className="text-lg text-gray-700 mb-4">
          Build scalable micro-frontend applications with ease
        </div>
      </div>

      <div className="mb-12">
        <p className="text-lg mb-6 text-gray-800">
          Lidhium.js is a powerful CLI tool designed to simplify the process of
          creating and managing micro-frontend applications with Webpack. It
          provides a complete solution for building, deploying, and managing
          modular frontend architectures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Core Technologies
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Vue 3</strong>
                  <p className="text-sm text-gray-700">
                    Modern, progressive JavaScript framework with Composition
                    API
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Webpack</strong>
                  <p className="text-sm text-gray-700">
                    Powerful module bundler with advanced code splitting
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Tailwind CSS</strong>
                  <p className="text-sm text-gray-700">
                    Utility-first CSS framework for rapid UI development
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Module Federation</strong>
                  <p className="text-sm text-gray-700">
                    Advanced system for seamless micro-frontend integration
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Key Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <div>
                  <strong>Zero-config Setup</strong>
                  <p className="text-sm text-gray-700">
                    Get started quickly with sensible defaults
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <div>
                  <strong>Hot Reloading</strong>
                  <p className="text-sm text-gray-700">
                    Built-in development server with instant updates
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <div>
                  <strong>Production Optimization</strong>
                  <p className="text-sm text-gray-700">
                    Automatic code splitting and bundle optimization
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <div>
                  <strong>Modern Tooling</strong>
                  <p className="text-sm text-gray-700">
                    TypeScript, ESLint, and Prettier included
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="relative py-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 relative z-10 inline-block">
            Installation & Project Setup
          </h2>
        </div>

        <div className="space-y-6">
          {/* Global Installation */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              1. Global Installation
            </h3>
            <p className="mb-4 text-gray-800">
              First, install Lidhium.js globally using npm or yarn to make the
              CLI commands available throughout your system:
            </p>
            <CodeBlock
              code={`# Using npm\nnpm install -g lidhium\n\n# Using yarn\nyarn global add lidhium`}
            />
          </div>

          {/* Create New Project */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              2. Create a New Project
            </h3>
            <p className="mb-4 text-gray-800">
              Once installed, you can create a new Lidhium.js project using the
              init command:
            </p>
            <CodeBlock code="lidhium init my-app" />
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-900">
                What this creates:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>A new directory with your project name</li>
                <li>Pre-configured Vue 3 setup with TypeScript</li>
                <li>Tailwind CSS configuration</li>
                <li>Module Federation setup</li>
                <li>Development and production configurations</li>
              </ul>
            </div>
          </div>

          {/* Project Structure */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              3. Project Structure
            </h3>
            <p className="mb-4 text-gray-800">
              The generated project includes the following configuration files
              and directories:
            </p>
            <CodeBlock
              code={`my-app/\n├── apps/                   # Application modules directory\n├── global/                 # Global configurations\n├── .browserslistrc         # Browser compatibility config\n├── .editorconfig           # Editor settings\n├── .eslintrc.js            # ESLint configuration\n├── .gitignore              # Git ignore rules\n├── babel.config.js         # Babel configuration\n├── cypress.json            # Cypress test config\n├── jest.config.js          # Jest test configuration\n├── lidhium.config.json     # Lidhium specific settings\n├── package.json            # Project dependencies\n├── postcss.config.js       # PostCSS configuration\n├── README.md              # Project documentation\n├── tailwind.config.js     # Tailwind CSS configuration\n└── tsconfig.json          # TypeScript configuration`}
            />
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-900">
                Key Configuration Files:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>lidhium.config.json</strong> - Configure
                  micro-frontend settings
                </li>
                <li>
                  <strong>apps/</strong> - Contains all your micro-frontend
                  applications
                </li>
                <li>
                  <strong>global/</strong> - Shared configurations and utilities
                </li>
                <li>
                  <strong>babel.config.js</strong> - JavaScript compilation
                  settings
                </li>
                <li>
                  <strong>tsconfig.json</strong> - TypeScript compiler options
                </li>
                <li>
                  <strong>tailwind.config.js</strong> - Styling configuration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          System Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900">Node.js</h4>
            <p className="text-gray-700">{"Version 20.9 or higher"}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900">
              Package Manager
            </h4>
            <p className="text-gray-700">npm 6.x+ or yarn 1.22.x+</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900">
              Browser Support
            </h4>
            <p className="text-gray-700">
              Modern browsers (Chrome, Firefox, Safari, Edge)
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Next Steps
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">→</span>
              <div>
                <strong>Create Micro App</strong>
                <p className="text-sm text-gray-700">
                  Generate your first micro-frontend application using the
                  lidhium generate command
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">→</span>
              <div>
                <strong>Create Components</strong>
                <p className="text-sm text-gray-700">
                  Start building your first micro-frontend components in the
                  src/components directory
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">→</span>
              <div>
                <strong>Configure Routes</strong>
                <p className="text-sm text-gray-700">
                  Set up routing in your application using Vue Router
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Troubleshooting Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              • Ensure your Node.js version is compatible using{" "}
              <code className="text-sm bg-gray-200 px-2 py-1 rounded text-gray-900">
                node --version
              </code>
            </li>
            <li>
              • If installation fails, try with admin privileges or use{" "}
              <code className="text-sm bg-gray-200 px-2 py-1 rounded text-gray-900">
                sudo
              </code>
            </li>
            <li>
              • Clear npm cache using{" "}
              <code className="text-sm bg-gray-200 px-2 py-1 rounded text-gray-900">
                npm cache clean --force
              </code>
            </li>
            <li>
              • For permission errors, check npm&apos;s global installation
              directory
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
