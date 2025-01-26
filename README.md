# Portfolio Tracker

A simple portfolio tracker application that allows users to manage their stock holdings, track real-time portfolio value, and view key performance metrics.

## Features
- **Add, view, edit, and delete stock holdings**
- **Track total portfolio value** based on real-time stock prices
- **Dashboard with key portfolio metrics** (e.g., total value, top-performing stock, portfolio distribution)

## Tech Stack
### Frontend
- React.js (preferred) or any modern frontend framework
- TailwindCSS / Bootstrap / Material-UI for styling

### Backend
- Java with Spring Boot (or Dropwizard)
- JPA and Hibernate for database interactions
- RESTful API design

### Database
- MySQL (preferred) or any relational database

### Real-Time Data
- Integrates with a free stock price API (e.g., Alpha Vantage, Yahoo Finance, Finnhub)
- Picks 5 random stocks per user for the portfolio
- Assumes quantity of each stock purchased is 1

## Deployment
- **Backend:** Deploy on Heroku, AWS, or Render
- **Frontend:** Deploy on Vercel or Netlify

## Getting Started
### Prerequisites
- Node.js (for frontend)
- Java 17+ (for backend)
- MySQL (for database)

### Setup Instructions
#### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/portfolio-tracker.git
cd portfolio-tracker
```

#### 2. Backend Setup (Spring Boot)
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Configure `application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
   spring.datasource.username=root
   spring.datasource.password=password
   ```
3. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

#### 3. Frontend Setup (React)
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

### API Endpoints
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/stocks`         | Get all stocks |
| POST   | `/stocks`         | Add a new stock |
| PUT    | `/stocks/{id}`    | Update stock details |
| DELETE | `/stocks/{id}`    | Delete a stock |

### Assumptions & Limitations
- Users are assigned 5 random stocks for their portfolio.
- Each stock's quantity is assumed to be 1.
- Only basic authentication is implemented (optional for now).
- The stock price API has rate limits that may affect real-time updates.

### Future Enhancements
- Implement user authentication and multi-user support.
- Improve real-time data fetching with WebSockets.
- Support for multiple stock exchanges and currencies.

## Contribution
Contributions are welcome! Feel free to open issues or submit PRs.

## License
This project is open-source and available under the MIT License.

---
Happy Coding! 🚀

