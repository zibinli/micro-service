pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'printenv'
                echo 'Building..'
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn lint'
                echo 'Testing..'
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            echo 'Deploying'
        }
    }
}
