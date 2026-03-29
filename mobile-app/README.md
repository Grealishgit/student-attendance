# Student Attendance Mobile App

This is an [Expo](https://expo.dev) app using Expo Router with file-based routing.

## What users should expect

When the app opens, users will see the authentication flow first. After logging in, the experience splits by role:

- Students land on a tabbed experience with a home dashboard, attendance check-in, history, and account views.
- Lecturers use a dedicated stack for class management, live session attendance, and reporting.

Attendance features rely on device permissions and location services (including geofencing), and some auth flows may use biometric prompts where supported.

## Get started

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
    npx expo start
    ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Project structure

```text
mobile-app/
|-- app/                          # Expo Router file-based navigation
|   |-- (auth)/
|   |   |-- login.tsx             # Login screen
|   |   |-- signup.tsx            # Signup screen
|   |   `-- _layout.tsx
|   |-- (tabs)/
|   |   |-- _layout.tsx           # Bottom tab layout for students
|   |   |-- index.tsx             # Home/dashboard screen
|   |   |-- attendance.tsx        # Sign attendance screen (GPS trigger)
|   |   |-- history.tsx           # Student attendance history
|   |   `-- account.tsx           # Profile and settings
|   |-- (lecturer)/
|   |   |-- _layout.tsx           # Lecturer stack layout
|   |   |-- index.tsx             # Lecturer dashboard
|   |   |-- classes.tsx           # Manage classes and geofence zones
|   |   |-- reports.tsx           # Generate and view reports
|   |   `-- live.tsx              # Live attendance view
|   |-- _layout.tsx               # Root layout
|   `-- modal.tsx                 # Shared modal route
|
|-- components/
|   |-- ui/
|   |   |-- Button.tsx
|   |   |-- Card.tsx
|   |   |-- Badge.tsx
|   |   `-- Input.tsx
|   |-- attendance/
|   |   |-- AttendanceButton.tsx  # Main GPS sign-in button
|   |   |-- GeofenceStatus.tsx    # Shows if student is in range
|   |   `-- AttendanceCard.tsx    # Individual attendance record
|   |-- reports/
|   |   |-- AttendanceChart.tsx   # Charts for reports
|   |   |-- ReportTable.tsx       # Tabular attendance data
|   |   `-- ExportButton.tsx      # Export actions
|   `-- auth/
|       |-- BiometricPrompt.tsx
|       `-- LoginForm.tsx
|
|-- hooks/
|   |-- useLocation.ts            # GPS + geofencing logic
|   |-- useAuth.ts                # Auth state + biometric
|   |-- useAttendance.ts          # Sign-in and records
|   |-- useReports.ts             # Fetch and generate reports
|   |-- use-color-scheme.ts
|   |-- use-color-scheme.web.ts
|   `-- use-theme-color.ts
|
|-- services/
|   |-- api.ts                    # API client config
|   |-- authService.ts            # Login and tokens
|   |-- attendanceService.ts      # Attendance APIs
|   |-- locationService.ts        # Location helpers
|   `-- reportService.ts          # Report APIs
|
|-- store/                        # App state stores
|   |-- authStore.ts
|   |-- attendanceStore.ts
|   `-- classStore.ts
|
|-- utils/
|   |-- geofence.ts               # Geofence calculations
|   |-- dateFormatter.tsx
|   `-- permissions.ts            # Permissions helpers
|
|-- constants/
|   |-- colors.ts
|   `-- theme.ts
|
|-- assets/
|   `-- images/
|
|-- scripts/
|   `-- reset-project.js
|
|-- app.json
|-- eslint.config.js
|-- expo-env.d.ts
|-- package.json
`-- tsconfig.json
```