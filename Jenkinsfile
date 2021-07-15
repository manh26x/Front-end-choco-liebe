
pipeline {
    agent any

    stages {
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                publishHTML target: [
            keepAll: true,
            reportFiles: 'index.html'
          ]
            }
        }
    }
}
