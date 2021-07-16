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
                archive (includes: 'pkg/*.gem')

  // publish html
  // snippet generator doesn't include "target:"
  // https://issues.jenkins.io/browse/JENKINS-29711.
  publishHTML (target: [
      allowMissing: false,
      alwaysLinkToLastBuild: false,
      keepAll: true,
      reportDir: 'coverage',
      reportFiles: 'index.html',
      reportName: "RCov Report"
    ])

}
            }
        }
    }
}
